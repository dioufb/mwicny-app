import React,{useState,useEffect} from 'react';
import uuid from 'react-uuid';
// import './FileManager.css';
import { Row, Col, CardBody,Button } from 'reactstrap';
import {Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { API, Storage, Auth } from 'aws-amplify';
import { AmplifyS3Image,AmplifyS3ImagePicker } from "@aws-amplify/ui-react/legacy";
import {listAssetss} from '../graphql/queries.ts'
import { createAssets,updateAssets,deleteAssets } from '../graphql/mutations.ts';

// import * as compress from 'compress';
import Resizer from "react-image-file-resizer";
// console.log(compress().compress());
// import '../styles.scss';
library.add(fas)
// import { Link } from 'react-router-dom';
export function AssetsManager() {
	const [selectedFile, setSelectedFile] = useState();
    const [assets, setAssets] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [currentAsset, setCurrentAsset] = useState();
    const [selectedFileData, setSelectedFileData] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);  
    const [urlWithExtension,setUrlWithExtension] = useState();  
    const [readyToUpload,setReadyToUpload] = useState(false);
    const [assetDesc,setAssetDesc] = useState(); 
    const [assetDuration, setAssetDuration] = useState(10);
    // let fileInput;
    useEffect(() => {
        getAssets();
    }, []);    

    async function getAssets() {       
        const apiData = await API.graphql({ query:  listAssetss});
        console.log('Set Assets',apiData);
        setAssets(apiData.data.listAssetss.items.filter(item => item._deleted !== true).
                    sort((a, b) => a._lastChangedAt < b._lastChangedAt ? 1 : -1));
    }
    const resizeFile = (file) =>
        new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            200,
            75,
            file.type,
            100,
            0,
            (uri) => {
                resolve(uri);
            },
            "base64"
        );
    });
    const dataURIToBlob = (dataURI) => {
        const splitDataURI = dataURI.split(",");
        const byteString =
        splitDataURI[0].indexOf("base64") >= 0
            ? atob(splitDataURI[1])
            : decodeURI(splitDataURI[1]);
        const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
        return new Blob([ia], { type: mimeString });
    };
    const padRightStyle = {
        paddingRight: "15px"
    };
    const handleShowPreviewDialog = (e) => {
        setIsPreviewOpen(!isPreviewOpen);
    };    
    const handleShowDialog = (e) => {
        let a = e.target;
        console.log(a.id);
        setCurrentAsset(a.id);
        setIsOpen(!isOpen);
    };
    const onAssetDescChange = (e) => {
        setAssetDesc(e.target.value);
    }
    const onAssetDurationChange = e => {
        setAssetDuration(e.target.value)
    }
    const toggleActive = async e => {
        console.log('assets',assets);
        let _id = e.target.id ? 
                e.target.id.split("_").slice(-1):
                e.target.parentNode.id.split("_").slice(-1) ;

        console.log('Target',e.target);
        console.log('ID',_id[0]);
        const filteredAssets = assets.filter(asset => asset.id === _id[0]);
        console.log('filteredAssets',filteredAssets);
        let auditObj = JSON.parse(filteredAssets[0].audittrail);
        let vers = filteredAssets[0]._version + 1 ;
        console.log(vers,filteredAssets[0]._version)
        let audittrails = auditObj instanceof Array ? auditObj : [auditObj];
        audittrails.push(`{"updatedOn":"${new Date().toUTCString()}","updatedBy":"${(await Auth.currentUserInfo()).attributes.email}"}`);


        console.log(_id);
        const results = await API.graphql({ query: updateAssets, variables: { input: {
            id : _id[0],
            active: !filteredAssets[0].active,
            audittrail: JSON.stringify(audittrails) ,
            _version: filteredAssets[0]._version
            }} 
        });
        console.log(results);
        getAssets();
            
    }
    const removeAsset = async e => {
        let _id = e.target.id ? 
                e.target.id.split("_").slice(-1):
                e.target.parentNode.id.split("_").slice(-1) ;
        const filteredAssets = assets.filter(asset => asset.id === _id[0]);
        const results = await API.graphql({ query: deleteAssets, variables: { input: {
            id : _id[0],
            _version: filteredAssets[0]._version} 
            } 
        });
        console.log(results);
        getAssets();
            
    }    
    function readURL(event) {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
        handleSubmission(event.target.files[0]);
        event.target.value=null;
    }    
	const handleSubmission = (file) => {
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                setSelectedFileData(e.target.result);
                setUrlWithExtension(uuid()+"."+file.name.split(".").slice(-1));
                setReadyToUpload(true);                
            };
            reader.readAsDataURL(file);
        }        
	}
	const saveAsset = async () => {
        if (readyToUpload && urlWithExtension) {
            let urlWithExtensionThumb = urlWithExtension.split(".")[0]+"_small."+urlWithExtension.split(".")[1];
            const image = await resizeFile(selectedFile);
            // console.log(image);
            const newFile = dataURIToBlob(image);            
            const resultThumb = await Storage.put(urlWithExtensionThumb, newFile, {
                /* level: 'protected', */
                contentType: newFile.type,
            });            
            // console.log(result);
            console.log(resultThumb);
            console.log(assetDesc);
            console.log(await Auth.currentUserInfo());
            await API.graphql({ query: createAssets, variables: { input: {
                                    url:urlWithExtension,
                                    active: true,
                                    description: assetDesc,
                                    displaytime: assetDuration,
                                    audittrail:`{"created":"${new Date().toUTCString()}","createdby":"${(await Auth.currentUserInfo()).attributes.email}"}`} 
                                    } 
                                }
                            );
            setReadyToUpload(false);
            setAssetDesc("");
            setUrlWithExtension("");
            setSelectedFile(null);
            setIsFilePicked(false);
            setSelectedFileData("");
            
            // this.fileInput.value = "";
            getAssets();            
            const result = await Storage.put(urlWithExtension, selectedFile, {
                /* level: 'protected', */
                contentType: selectedFile.type,
            });
            console.log(result);
            return false;
        }
    }
    return (
        <div>
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0">Assests</h4>
                        </Col> 
                        {/* <Col>
                            <AmplifyS3ImagePicker track="true"/>
                        </Col> */}
                        <Col sm={6}>
                            <span>Upload an asset</span>
                            <input id="upload" type="file"  onChange={readURL} className="form-control border-0"/>
                        </Col>
                    </Row>
                    <Row>
                        <Modal show={readyToUpload} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Upload an asset</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <img id="imageResult" src={selectedFileData} alt="" className="img-fluid rounded shadow-sm mx-auto d-block" onClick={handleShowPreviewDialog}/>
                            <form action="#" onSubmit={saveAsset}>
                                <div className="form-group">
                                    <label htmlFor="email">Description:</label>
                                    <input type="text" className="form-control" id="assetDesc" onChange={onAssetDescChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Display duration (seconds):</label>
                                    <input type="text" className="form-control" id="assetDuration" onChange={onAssetDurationChange} defaultValue="10"/>
                                </div>                                
                                <div className="form-group">
                                    <label htmlFor="pwd">Url:</label>
                                    <input type="text" className="form-control" id="url" value={urlWithExtension} readOnly/>
                                </div>
                                <button type="submit" className="btn btn-default" >Create Asset</button>
                            </form>                                
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary">Close</Button>
                            </Modal.Footer>
                        </Modal>                        

                    </Row>
                </div>
                <Row>
                    <Col sm={12}>
                        <div className="card-statistics h-100 card file-manager">
                            <CardBody>
                                <Row className="mb-2 mb-md-4">
                                    <div style={padRightStyle}>
                                        <ul className="file-list">
                                            <li>
                                                <FontAwesomeIcon icon={["fas", "search"]} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={["fas", "floppy-disk"]} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={["fas", "download"]} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={["fas", "clone"]} />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={["fas", "trash"]} />
                                            </li>
                                        </ul>
                                    </div>
                                </Row>
                                <Row>
                                    <div>&nbsp;</div>
                                </Row>
                                <Row></Row>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped mb0">
                                        <thead>
                                            <tr>
                                                <th>Preview</th>
                                                <th>display time</th>
                                                <th>Description</th>
                                                <th>Path</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Preview</th>
                                                <th>display time</th>
                                                <th>Description</th>
                                                <th>Path</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>

                                            {assets &&
                                                assets.map(asset => (
                                                    
                                                    <tr  key={asset.id}>
                                                        <td>
                                                            <AmplifyS3Image id={asset.id} onClick={handleShowDialog}  level="public" imgKey={asset.url.split(".")[0]+"_small."+asset.url.split(".")[1]} style={{'--height': '75px'}}/>
                                                            <img className="thumImg" src={asset.url} alt="" onClick={handleShowDialog}/>
                                                            {isOpen && currentAsset===asset.id && (
                                                                <dialog
                                                                    className="dialog"
                                                                    style={{ position: "absolute" }}
                                                                    open
                                                                    onClick={handleShowDialog}
                                                                >
                                                                    <AmplifyS3Image onClick={handleShowDialog} level="public" imgKey={asset.url} style={{'--width': '800px'}}/>
                                                                    
                                                                </dialog>
                                                            )}                                                            
                                                        </td>
                                                        <td>{asset.displaytime}</td>
                                                        <td>{asset.description}</td>
                                                        <td>{asset.url.split('/').slice(-1)}</td>
                                                        <td>{asset.active?"Active":"Inactive"}</td>
                                                        <td>
                                                            <FontAwesomeIcon onClick={toggleActive} id={"check_"+asset.id} style={{"paddingLeft":"15px","cursor":"pointer"}} icon={["fas",`${asset.active?"toggle-off":"toggle-on"}`]} title={asset.active?"Disable":"Enable"}/>
                                                            <FontAwesomeIcon onClick={removeAsset} id={"delete_"+asset.id} icon={["fas", "trash"]} style={{"paddingLeft":"25px","cursor":"pointer"}} title="Delete"/>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </CardBody>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    );
}
