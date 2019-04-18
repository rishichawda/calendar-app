import React, { Component } from 'react';
import styles from './index.css';
import leftIcon from '../../../resources/left.png';
import rightIcon from '../../../resources/right.png';
import { history } from '../../store/configureStore';
import { months } from '../../constants/data';
import { TopNavigationBar, InnerBar, NavigationButton } from './components';
import Icon from '../shared/icon';

const weekDays =
  '<tr><td>S</td><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td></tr>';

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

  navigateToDetails = e => {
    history.push(`notes?${e.target.getAttribute('data-cell-info')}`);
  };

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
          cell.className = styles['no-anim'];
        } else if (date > this.daysInMonth(month, year)) {
          break;
        } else {
          const cell = document.createElement('td');
          const cellText = document.createTextNode(date);
          // eslint-disable-next-line no-loop-func
          ((cellEle, index) => {
            setTimeout(() => {
              cellEle.classList.add(styles.zoomin);
            }, (50 * index) / 5);
          })(cell, date);
          if (
            date === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth()
          ) {
            cell.classList.add(styles.today);
          } // color today's date
          cell.appendChild(cellText);
          cell.setAttribute('data-cell-info', `${date}-${month}-${year}`);
          cell.addEventListener('click', this.navigateToDetails);
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
        <TopNavigationBar>
          <InnerBar>
            <NavigationButton onClick={this.previous}>
              <Icon src={leftIcon} height={16} />
            </NavigationButton>
            <div className={styles.monthAndYear}>{`${
              months[month]
            } ${year}`}</div>
            <NavigationButton onClick={this.next}>
              <Icon src={rightIcon} height={16} />
            </NavigationButton>
          </InnerBar>
        </TopNavigationBar>
        <table>
          <tbody className={styles.calendar} id="calendar-body" />
        </table>
      </>
    );
  }
}
