import React, { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';

const DatePicker = () => {
  const [years, setYears] = useState([]);
  const [days, setDays] = useState([]);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState('January');

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    getYears(currentYear);
    setYear(currentYear);
    getDaysInMonth(month, currentYear);
  }, []);

  // Takes the current year, and gets the most recent 120 calendar years
  const getYears = (currentYear) => {
    let selectableYears = [];
    for (
      var yearBoundary = currentYear - 121;
      currentYear > yearBoundary;
      currentYear--
    ) {
      selectableYears.push(currentYear);
    }
    setYears(selectableYears);
  };

  // Our 12 calendar months
  const monthMap = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Once a year and month are selected, sets array of valid dates available
  // for a chosen month. Handles leap years.
  const getDaysInMonth = (newMonth, newYear) => {
    const selectedMonth = monthMap.indexOf(newMonth) + 1;
    const days = new Date(newYear, selectedMonth, 0).getDate();

    setDays([...Array(days + 1).keys()].slice(1));
  };

  // If new month is selected, updates available valid dates.
  const onMonthChange = (e) => {
    setMonth(e.target.value);
    getDaysInMonth(e.target.value, year);
  };

  // If new year is selected, updates available valid dates.
  // Really only matters for leap years if february is chosen month.
  const onYearChange = (e) => {
    setYear(e.target.value);
    getDaysInMonth(month, e.target.value);
  };

  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group controlId='selectYear'>
            <Form.Label>Year</Form.Label>
            <Form.Control as='select' custom onChange={onYearChange}>
              {years.map((year) => (
                <option id={year} value={year}>
                  {year}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='selectMonth'>
            <Form.Label>Month</Form.Label>
            <Form.Control as='select' custom onChange={onMonthChange}>
              {monthMap.map((month) => (
                <option id={month} value={month}>
                  {month}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='selectDay'>
            <Form.Label>Day</Form.Label>
            <Form.Control as='select' custom>
              {days.map((day) => (
                <option id={day} value={day}>
                  {day}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default DatePicker;
