// @flow
import React, { Component } from 'react';
import styles from './Home.css';
import Calendar from './calendar-view';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Calendar />
      </div>
    );
  }
}
