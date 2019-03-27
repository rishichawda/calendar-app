// @flow
import React, { Component } from 'react';
import styles from './index.css';

export default class Details extends Component {
  render() {
    console.log(this.props.location);
    return (
      <div>
        Ta-da!!
      </div>
    );
  }
}
