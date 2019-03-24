// @flow
import React, { Component } from 'react';
import styles from './Home.css';

export default class Home extends Component {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <p>Setup done!</p>
      </div>
    );
  }
}
