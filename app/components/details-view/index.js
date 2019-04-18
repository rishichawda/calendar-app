import React, { Component } from 'react';
import { connect } from 'react-redux';
import leftIcon from '../../../resources/left.png';
import { history } from '../../store/configureStore';
import { months } from '../../constants/data';
import styles from './index.css';

class Details extends Component {
  render() {
    const {
      data: { day, month, year }
    } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.backButton} onClick={() => history.replace('/')}>
            <img src={leftIcon} height={16} width="auto" />
          </div>
          <div className={styles.displayDate}>
            <h2>{`${months[month]} ${day}, ${year}`}</h2>
          </div>
        </div>
        <div className={styles.content}>Wow, so empty!</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.router);
  const [day, month, year] = state.router.location.search.slice(1).split('-');
  return {
    data: { day, month, year }
  };
};

export default connect(mapStateToProps)(Details);
