import React, { Component } from 'react';

import { Header } from "./logincomponents/Header";
import { Footer } from "./logincomponents/Footer";
import { SignInHeader } from "./logincomponents/SignInHeader";
import { SignInFooter } from "./logincomponents/SignInFooter";

// import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

export function App({ signOut, user }) {
  return (
    <main>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
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
