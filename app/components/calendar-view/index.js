import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './index.css';
import leftIcon from '../../../resources/left.png';
import rightIcon from '../../../resources/right.png';

// Months array to display the correct month name in top navigation panel.
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

// First row of the calendar which displays the weekdays.
const weekDays =
  '<tr><td>S</td><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td></tr>';

class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.today = new Date();
    this.state = {
      month: this.today.getMonth(),
      year: this.today.getFullYear(),
      redirect: false
    };
  }

  /*
  On mounting / updating ( since the state only updates on switching to prev or next month ),
  we need to recalculate the calendar for the month and build the table again.
  Hence, we call the showCalendar method on componentDidMount and componentDidUpdate.
  */

  componentDidMount() {
    const { month: currentMonth, year: currentYear } = this.state;
    this.showCalendar(this.today, currentMonth, currentYear);
  }

  componentDidUpdate() {
    const { month: currentMonth, year: currentYear, redirect } = this.state;
    if(!redirect) {
      this.showCalendar(this.today, currentMonth, currentYear);
    }
  }

  /**
   * Move to next month.
   * @memberof CalendarView
   */
  next = () => {
    const { month: currentMonth, year: currentYear } = this.state;
    this.setState({
      month: (currentMonth + 1) % 12,
      year: currentMonth === 11 ? currentYear + 1 : currentYear
    });
  };

  /**
   * Move to previous month.
   * @memberof CalendarView
   */
  previous = () => {
    const { month: currentMonth, year: currentYear } = this.state;
    this.setState({
      month: currentMonth === 0 ? 11 : currentMonth - 1,
      year: currentMonth === 0 ? currentYear - 1 : currentYear
    });
  };

  /**
   * Calculate the number of days in a month.
   * @memberof CalendarView
   */
  daysInMonth = (iMonth, iYear) => 32 - new Date(iYear, iMonth, 32).getDate();

  navigateToDetails = (iDay, iMonth, iYear) => {
    // const { history } = this.props;
    this.props.history.push('/notes');
    // this.setState({
    //   param: `${iDay}${iMonth}${iYear}`,
    //   redirect: true
    // });
  };

  /**
   * Generate calendar for particular month.
   * @memberof CalendarView
   */
  showCalendar = (today, month, year) => {
    const firstDay = new Date(year, month).getDay();
    const tbl = document.getElementById('calendar-body');

    // Remove all the cells generated previously and replace with the weekday row.
    tbl.innerHTML = weekDays;

    // Create all the cells in the calendar to contain the dates.
    let date = 1;
    for (let i = 0; i < 6; i += 1) {
      // creates a table row
      const row = document.createElement('tr');
      // creating individual cells, filing them up with data.
      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDay) {
          // Fill empty cells before month start for all the week days.
          const cell = document.createElement('td');
          const cellText = document.createTextNode('');
          cell.appendChild(cellText);
          row.appendChild(cell);
          cell.className = styles['no-anim'];
        } else if (date > this.daysInMonth(month, year)) {
          // All dates are filled to their respective cells.
          break;
        } else {
          // Insert date into the appropriate cell.
          // Create a td cell and insert the text node.
          const cell = document.createElement('td');
          const cellText = document.createTextNode(date);
          if (
            date === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth()
          ) {
            // If the date is today's date, apply the today class to style it differently.
            cell.classList.add(styles.today);
          }
          cell.appendChild(cellText);
          // eslint-disable-next-line no-loop-func
          cell.addEventListener('click', () => {
            this.navigateToDetails(date, month, year);
          });
          row.appendChild(cell);
          date += 1;
        }
      }
      // Append each row to the calendar table.
      tbl.appendChild(row);
    }
  };

  render() {
    const { month, year, redirect, param } = this.state;
    // if(redirect) {
    //   return <Redirect to={`/notes/${param}`} />
    // }
    return (
      <>
        <div className={styles.topNavigation}>
          <div>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div className={styles.prev} onClick={this.previous}>
              <img alt="prev" src={leftIcon} height={16} width="auto" />
            </div>
            <div className={styles.monthAndYear}>{`${
              months[month]
            } ${year}`}</div>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div className={styles.next} onClick={this.next}>
              <img alt="next" src={rightIcon} height={16} width="auto" />
            </div>
          </div>
        </div>
        <table>
          <tbody className={styles.calendar} id="calendar-body" />
        </table>
      </>
    );
  }
}

export default withRouter(CalendarView);
