
import { Meteor } from 'meteor/meteor';
//import Meteor library
import React from 'react';
//import React library
import { render } from 'react-dom';
//import the render function from react-dom
import App from '../imports/App.js';
import axios from 'axios'
//import the React component that we haven't created yet! ...oops
import Autocomplete from 'react-google-autocomplete'
Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
