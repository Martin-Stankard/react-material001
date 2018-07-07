import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    GridList,
    GridTile
} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton'; 
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'

export default class ImageResults extends Component {
  render() {
    return (
      <div>
        <h1>Image Results</h1>
      </div>
    );
  };

  
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
};