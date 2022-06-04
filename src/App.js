import React from 'react';
import { Row, Col } from 'reactstrap';
import { Header } from "./logincomponents/Header";
import { Footer } from "./logincomponents/Footer";
import { SignInHeader } from "./logincomponents/SignInHeader";
import { SignInFooter } from "./logincomponents/SignInFooter";
import {AssetsManager} from "./pages/AssetsManager"
// import logo from './logo.svg';
import './styles.scss';
import './App.css';

import { withAuthenticator } from "@aws-amplify/ui-react";

import Amplify from 'aws-amplify';

import aws_exports from './aws-exports';
import { PlayListManager } from './pages/PlayListsManager';
Amplify.configure(aws_exports);

export function App({ signOut, user }) {
  const alignRight = {
    right:0
  }
  return (
    <main>
      <Row>
        <Col sm={6}><h1>Hello {user.attributes.given_name.charAt(0).toUpperCase()+user.attributes.given_name.slice(1).toLowerCase()}</h1></Col>
        <Col sm={6}><button style={alignRight} onClick={signOut}>Sign out</button></Col>
      </Row>
      <br/><br/><br/>
      <AssetsManager/>
      <PlayListManager/>
    </main>
    
  );
}

export default withAuthenticator(App, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  }
});
