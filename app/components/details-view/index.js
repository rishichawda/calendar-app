import React, { Component } from 'react';
import { connect } from 'react-redux';
import leftIcon from '../../../resources/left.png';
import { history } from '../../store/configureStore';
import { months } from '../../constants/data';
import styles from './details.css';
import addIcon from '../../../resources/add.png';
import { TopBar, DisplayDate, ContentContainer, NoContentInfo } from './components';
import Icon from '../shared/icon';

class Details extends Component {

  render() {
    const {
      data: { day, month, year }
    } = this.props;
    return (
      <div className={styles.container}>
        <TopBar>
          <div
            className={styles.backButton}
            onClick={() => history.replace('/')}
          >
            <Icon src={leftIcon} height={16} />
          </div>
          <DisplayDate>
            <h2>{`${months[month]} ${day}, ${year}`}</h2>
          </DisplayDate>
        </TopBar>
        <ContentContainer className={styles.content}>
        <NoContentInfo>
          <p className={styles.emptyText}>Wow, so empty!</p>
          <div styles={styles.addItem}>
            <img src={addIcon} />
            <p className={styles.cta}>Tap to add a note.</p>
          </div>
          </NoContentInfo>
        </ContentContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const [day, month, year] = state.router.location.search.slice(1).split('-');
  return {
    data: { day, month, year }
  };
};

export default connect(mapStateToProps)(Details);
