import React, { Component } from 'react';
import styles from './index.css';
import leftIcon from '../../../resources/left.png';
import rightIcon from '../../../resources/right.png';

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

const weekDays = '<tr><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr>';

export default class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.today = new Date();
    this.state = {
      month: this.today.getMonth(),
      year: this.today.getFullYear()
    };
  }

  componentDidMount() {
    const { month: currentMonth, year: currentYear } = this.state;
    this.showCalendar(this.today, currentMonth, currentYear);
  }

  componentDidUpdate() {
    const { month: currentMonth, year: currentYear } = this.state;
    this.showCalendar(this.today, currentMonth, currentYear);
  }

  next = () => {
    const { month: currentMonth, year: currentYear } = this.state;
    this.setState({
      month: (currentMonth + 1) % 12,
      year: currentMonth === 11 ? currentYear + 1 : currentYear
    });
  };

  previous = () => {
    const { month: currentMonth, year: currentYear } = this.state;
    this.setState({
      month: currentMonth === 0 ? 11 : currentMonth - 1,
      year: currentMonth === 0 ? currentYear - 1 : currentYear
    });
  };

  daysInMonth = (iMonth, iYear) => 32 - new Date(iYear, iMonth, 32).getDate();

  showCalendar = (today, month, year) => {
    const firstDay = new Date(year, month).getDay();

    const tbl = document.getElementById('calendar-body'); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = weekDays;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i += 1) {
      // creates a table row
      const row = document.createElement('tr');

      // creating individual cells, filing them up with data.
      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDay) {
          const cell = document.createElement('td');
          const cellText = document.createTextNode('');
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (date > this.daysInMonth(month, year)) {
          break;
        } else {
          const cell = document.createElement('td');
          const cellText = document.createTextNode(date);
          if (
            date === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth()
          ) {
            cell.classList.add('bg-info');
          } // color today's date
          cell.appendChild(cellText);
          row.appendChild(cell);
          date += 1;
        }
      }

      tbl.appendChild(row); // appending each row into calendar body.
    }
  };

  render() {
    const { month, year } = this.state;
    return (
      <>
        <div className={styles.topNavigation}>
          <div>
          <div className={styles.prev} onClick={this.previous}>
            <img src={leftIcon} height={16} width='auto' />
          </div>
          <div className={styles.monthAndYear}>{`${months[month]} ${year}`}</div>
          <div className={styles.next} onClick={this.next}>
            <img src={rightIcon} height={16} width='auto' />
          </div>
          </div>
        </div>
        <table id="calendar-body">
        </table>
      </>
    );
  }
}
