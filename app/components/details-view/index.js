import React, { Component } from 'react';
import styles from './index.css';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        Ta-da!!
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.router)
  const [day, month, year] = state.router.location.search.slice(1).split('-');
  return {
  data: { day, month, year }
  };
}

export default connect(mapStateToProps)(Details);