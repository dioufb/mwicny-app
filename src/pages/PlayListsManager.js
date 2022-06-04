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
import {listAssetss,listPlaylistss,getAssets,listCurrentPlayLists,getPlayLists} from '../graphql/queries.ts'
import { createAssets,updateAssets,deleteAssets,createPlaylists,updatePlaylists,deletePlaylists,createPlaylistsAssets,createCurrentPlayList,updateCurrentPlayList } from '../graphql/mutations.ts';


// import '../styles.scss';
library.add(fas)
// import { Link } from 'react-router-dom';
export function PlayListManager() {
	const [selectedFile, setSelectedFile] = useState();
    const [assets, setAssets] = useState();
    const [playlists, setPlayLists] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [currentAsset, setCurrentAsset] = useState();
    const [selectedFileData, setSelectedFileData] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);  
    const [urlWithExtension,setUrlWithExtension] = useState();  
    const [readyToUpload,setReadyToUpload] = useState(false);
    const [assetDesc,setAssetDesc] = useState(); 
    const [assetDuration, setAssetDuration] = useState(10);
    const [playListDesc,setPlayListDesc]=useState();
    const [playListName,setPlayListName]=useState();
    const [playlistContents,setPlaylistContents]=useState();
    const [collapsedRows,setCollapsedRows] = useState({});
    const [currentPlayList,setCurrentPlayList] = useState();
    const [selectedImages,setSelectedImages]=useState();
    const [currentlyConfiguredPlayList,setCurrentlyConfiguredPlayList]=useState();

    // let fileInput;
    useEffect(() => {
        getPlayLists();
        getAllAssets();
        getCurrentlyConfiguredPlayList();
    }, []);    

    async function getPlayLists() {       
        const apiData = await API.graphql({ query:  listPlaylistss});
        
        let pls = apiData.data.listPlaylistss.items.filter(item => item._deleted !== true).
            sort((a, b) => a._lastChangedAt < b._lastChangedAt ? 1 : -1);
        let plContents = [];
        // setPlayLists(pls);
        for (const plContent of pls) {
            
            plContent.type='main';
            
            plContents.push(plContent);
            console.log('Assests For plastlist',plContent.PlaylistsAssets.items);
            for (const playlistAssest of plContent.PlaylistsAssets.items) {
                let subPlContent= Object.assign({},plContent);
                subPlContent.type="child";
                subPlContent.assetID = playlistAssest.assetsID;
                let asset = await API.graphql({ query: getAssets, variables : {id:playlistAssest.assetsID}});
                console.log(asset);
                subPlContent.assetdesc = asset.data.getAssets.description;
                subPlContent.assetstatus = asset.data.getAssets.active;
                subPlContent.asseturl = asset.data.getAssets.url;
                subPlContent.assetdisplaytime = asset.data.getAssets.displaytime;
                plContents.push(subPlContent);
            }             
        }        
        setPlayLists(plContents);
        console.log('Set Playlists',plContents);

    }
    async function getAllAssets() {       
        const apiData = await API.graphql({ query:  listAssetss});
        console.log('Set Assets',apiData);
        setAssets(apiData.data.listAssetss.items.filter(item => item._deleted !== true).
                    sort((a, b) => a._lastChangedAt < b._lastChangedAt ? 1 : -1));
    }
    //listCurrentPlayLists
    async function getCurrentlyConfiguredPlayList() {       
        const apiData = await API.graphql({ query:  listCurrentPlayLists});
        console.log('Set Current Screen Config',apiData);

        setCurrentlyConfiguredPlayList(apiData.data.listCurrentPlayLists.items[0]);
    }    
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
    const onPlayListDescChange = (e) => {
        setPlayListDesc(e.target.value);
    }
    const onPlayListNameChange = e => {
        setPlayListName(e.target.value)
    }
    const saveSelection = e => {
        let newList = selectedImages instanceof Array ? Object.assign([],selectedImages) : [];
        console.log('newList==>',newList);
        let _id=e.target.id.split("_").slice(-1)[0];
        if (e.target.checked) {
            if (!newList.includes(_id)) newList.push(_id);
        } else {
            newList = newList.filter(item => item!==_id);
        }
        setSelectedImages(newList);
    }
    const toggleAssests = e => {
        let _id ;
        let classNames;
        if (e.target.id) { 
            _id=e.target.id.split("_").slice(-1);
            classNames = e.target.className;
        } else {
            _id=e.target.parentNode.id.split("_").slice(-1) ; 
            classNames = e.target.parentNode.className;
        }
        console.log(classNames);
        let currentCollpsedRows = collapsedRows || {};
        console.log(currentCollpsedRows);
        if (classNames.split(" ").includes("r-open")) {
            console.log("here=====>");
            // currentCollpsedRows[_id]=null;
            delete currentCollpsedRows[_id];
            console.log(currentCollpsedRows);
        } else {
            currentCollpsedRows[_id]=true;
        }
        setCollapsedRows(Object.assign({},currentCollpsedRows));
        
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
        getPlayLists();
            
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
        getPlayLists();
            
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
    const createNewPlayList = async () => {
        setReadyToUpload(true);
    }
    const dismissAssetPopUp = e => {
        setCurrentPlayList("");
    }
    const AddToPlayList = async () => {
        selectedImages.map(async assesID => {
            console.log('Adding AssetID: =>', assesID)
            await API.graphql({ query: createPlaylistsAssets, variables: { input: {
                playlistsID: currentPlayList,
                assetsID: assesID,
                    } 
                }
            });
        });
        setSelectedImages([]);
        setCurrentPlayList("");
        await getPlayLists();        
    }
    const AddAssets = async e => {
        let _id ;
        let classNames;
        if (e.target.id) { 
            _id=e.target.id.split("_").slice(-1);
            classNames = e.target.className;
        } else {
            _id=e.target.parentNode.id.split("_").slice(-1) ; 
            classNames = e.target.parentNode.className;
        }
        let pl = await API.graphql({ query: createCurrentPlayList, variables: { input: {
            playlist:'default',
            assests: "{}",
            audittrail:`{"created":"${new Date().toUTCString()}","createdby":"${(await Auth.currentUserInfo()).attributes.email}"}`} 
            } 
        }); 
        setCurrentPlayList(_id[0]);
    }
    const makeCurrentPlayList = async e => {
        let _id ;
        if (e.target.id) { 
            _id=e.target.id.split("_").slice(-1);
        } else {
            _id=e.target.parentNode.id.split("_").slice(-1) ; 
        }  
        let pls = playlists.filter(p=>p.id===_id[0]);
        let localAssets = [];
        //updateCurrentPlayList
        pls.map(p=>{
            if (p.type!=="main") {
                localAssets.push({
                    id: p.assesID,
                    url: p.asseturl,
                    duration: p.assetdisplaytime,
                    description: p.assetdesc
                });
            }
        }); 
        let audit = JSON.parse(currentlyConfiguredPlayList.audittrail);
        audit = audit instanceof Array ? audit : [audit];
        audit.push(JSON.parse(`{"modify":"${new Date().toUTCString()}","modifyby":"${(await Auth.currentUserInfo()).attributes.email}"}`));
        
        await API.graphql({ query: updateCurrentPlayList, variables: { input: {
                id : currentlyConfiguredPlayList.id,
                assests: JSON.stringify(localAssets),
                playlist: pls[0].name,
                audittrail: JSON.stringify(audit) ,
                _version: currentlyConfiguredPlayList._version
                }
            }  
        });            
        await getCurrentlyConfiguredPlayList();
    }
	const savePlayList = async () => {
        if (readyToUpload && playListName && playListDesc) {
            
            await API.graphql({ query: createPlaylists, variables: { input: {
                                    name:playListName,
                                    active: true,
                                    description: playListDesc,
                                    audittrail:`{"created":"${new Date().toUTCString()}","createdby":"${(await Auth.currentUserInfo()).attributes.email}"}`} 
                                    } 
                                }
                            );
            setReadyToUpload(false);
            setPlayListDesc(null);
            setPlayListName(null);
            getPlayLists();
            return false;
        } else {
            console.log(readyToUpload);
            console.log(playListName);
            console.log(playListDesc);
            return false;
        }
    }
    return (
        <div>
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0">Playlists</h4>
                        </Col> 
                        <Col sm={6}>
                            <input type="button" value="Add a new playlist" onClick={createNewPlayList}/> 
                        </Col>  
                                               
                    </Row>
                    <Row>
                        <Modal show={readyToUpload} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Create a playlist</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <form action="#" onSubmit={savePlayList}>
                                <div className="form-group">
                                        <label htmlFor="email">Playlist Name:</label>
                                        <input type="text" className="form-control" id="assetDesc" onChange={onPlayListNameChange}/>
                                    </div>                                
                                <div className="form-group">
                                    <label htmlFor="email">Playlist Description:</label>
                                    <input type="text" className="form-control" id="assetDesc" onChange={onPlayListDescChange}/>
                                </div>
                                <button type="submit" className="btn btn-default" >Create Playlist</button>
                            </form>                                
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary">Close</Button>
                            </Modal.Footer>
                        </Modal>                        

                    </Row> 
                    <Row>
                        <Modal show={currentPlayList && currentPlayList!==""} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add Images to playlist</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <form action="#" onSubmit={AddToPlayList}>
                            <div className="table-responsive">
                                    <table className="table table-bordered table-striped mb0">
                                        <thead>
                                            <tr>
                                                <th>Selection</th>
                                                <th>Preview</th>
                                                <th>display time</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {assets &&
                                            assets.map(asset => {
                                                let cPL = playlists.filter(p=>p.id===currentPlayList)[0];
                                                console.log(cPL);
                                                if (cPL && cPL.PlaylistsAssets.items.filter(pa =>  pa.assetsID===asset.id).length===0) {

                                                        return(
                                                        
                                                        <tr  key={asset.id}>
                                                            <td><input id={asset.id} type="checkbox" onChange={saveSelection}/></td>
                                                            <td>
                                                                <AmplifyS3Image id={asset.id}  level="public" imgKey={asset.url.split(".")[0]+"_small."+asset.url.split(".")[1]} style={{'--height': '75px'}}/>                                                           
                                                            </td>
                                                            <td>{asset.displaytime}</td>
                                                            <td>{asset.description}</td>
                                                        </tr>
                                                    );
                                                } else {
                                                    // return (<></>);
                                                }
                                            })
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>                                    
                                

                                <button type="submit" className="btn btn-default" >Add to Playlist</button>
                            </form>                                
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={dismissAssetPopUp}>Close</Button>
                            </Modal.Footer>
                        </Modal>                        

                    </Row>                                         
                </div>
                <Row>
                    <Col sm={12}>
                        <div className="card-statistics h-100 card file-manager">
                            <CardBody>
                                <Row>
                                    <div>&nbsp;</div>
                                </Row>
                                <Row></Row>
                                <div className="table-responsive">
                                    <table className="table table-responsive table-hover">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>PlayList Name</th>
                                                <th>Status</th>
                                                <th>preview</th>
                                                <th>asset status</th>
                                                <th>duration</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th>PlayList Name</th>
                                                <th>Status</th>
                                                <th>preview</th>
                                                <th>asset status</th>
                                                <th>duration</th>
                                                <th>Actions</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>

                                            {playlists && playlists.length>0 &&
                                                playlists.map(playlist => {
                                                    console.log("||=>",playlists.length);
                                                    console.log("||=>",playlist);
                                                    if (playlist.type==="main") {
                                                        return(
                                                            <tr key={playlist.id} className={"clickable"} data-toggle="collapse" id={"row_"+playlist.id} data-target={".row_"+playlist.id}>
                                                                <td><i className={"glyphicon glyphicon-plus "+(collapsedRows[playlist.id]?"r-open":"")} onClick={toggleAssests} id={"plus_"+playlist.id}></i></td>
                                                                <td>{playlist.name}</td>
                                                                <td>{playlist.active?"Active":"Inactive"}</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>
                                                                    <Button onClick={AddAssets} id={"delete_"+playlist.id}>Add Image</Button>
                                                                    &nbsp;&nbsp;&nbsp;<Button onClick={makeCurrentPlayList} id={"check_"+playlist.id}>Send to TV</Button>
                                                                </td>  
                                                            </tr>
                                                            ); 
                                                    } else {
                                                        console.log("child_"+playlist.id+"_"+playlist.assetID+"===>");
                                                        return (
                                                            <tr key={"child_"+playlist.id+"_"+playlist.assetID} className={"collapse row_"+playlist.id+" " + (collapsedRows[playlist.id]?"in":"")}>                                                                                                        
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td>
                                                                    <AmplifyS3Image id={playlist.id+"_"+playlist.assetID} onClick={handleShowDialog}  level="public" imgKey={playlist.asseturl.split(".")[0]+"_small."+playlist.asseturl.split(".")[1]} style={{'--height': '75px'}}/>
                                                                    {isOpen && currentAsset===playlist.assetID && (
                                                                        <dialog
                                                                            className="dialog"
                                                                            style={{ position: "absolute" }}
                                                                            open
                                                                            onClick={handleShowDialog}
                                                                        >
                                                                            <AmplifyS3Image onClick={handleShowDialog} level="public" imgKey={playlist.asseturl} style={{'--width': '800px'}}/>
                                                                            
                                                                        </dialog>
                                                                    )}                                                            
                                                                </td>
                                                                <td>{playlist.assetstatus?"Active":"Inactive"}</td>
                                                                <td>{playlist.assetdisplaytime}</td>
                                                                <td>
                                                                    <FontAwesomeIcon onClick={toggleActive} id={"check_"+playlist.assetID} style={{"paddingLeft":"15px","cursor":"pointer"}} icon={["fas",`${playlist.assetstatus?"toggle-off":"toggle-on"}`]} title={playlist.assetstatus?"Disable":"Enable"}/>
                                                                    <FontAwesomeIcon onClick={removeAsset} id={"delete_"+playlist.assetID} icon={["fas", "trash"]} style={{"paddingLeft":"25px","cursor":"pointer"}} title="Delete"/>
                                                                </td>
                                                            </tr>
                                                        );
                                                    }
                                                                                                                                                           


                                                    
                                                } 
                                                )
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
