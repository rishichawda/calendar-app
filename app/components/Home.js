// @flow
import React, { Component } from 'react';
import styles from './Home.css';
import TopNavigation from './top-navigation';
import Calendar from './calendar-view';

export default class Home extends Component {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <TopNavigation />
        <Calendar />
      </div>
    );
  }
}
