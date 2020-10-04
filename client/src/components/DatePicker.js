import React, { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DatePicker = () => {
  const [years, setYears] = useState([]);
  const [days, setDays] = useState([]);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState('January');
  const [day, setDay] = useState(1);

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
    const newDays = new Date(newYear, selectedMonth, 0).getDate();

    setDays([...Array(newDays + 1).keys()].slice(1));
    if (parseInt(day) > newDays) {
      setDay(newDays);
    }
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

  const onDayChange = (e) => {
    setDay(e.target.value);
  };

  const onSubmit = () => {
    const dateOfBirth = {
      year,
      month,
      day,
    };
    console.log(dateOfBirth);
  };

  return (
    <div>
      <h4>Enter date of birth</h4>
      <Form>
        <Form.Row>
          <Form.Group controlId='selectYear'>
            <Form.Label>Year</Form.Label>
            <Form.Control
              as='select'
              custom
              onChange={onYearChange}
              value={year}
            >
              {years.map((year) => (
                <option id={year} value={year}>
                  {year}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='selectMonth'>
            <Form.Label>Month</Form.Label>
            <Form.Control
              as='select'
              custom
              onChange={onMonthChange}
              value={month}
            >
              {monthMap.map((month) => (
                <option id={month} value={month}>
                  {month}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='selectDay'>
            <Form.Label>Day</Form.Label>
            <Form.Control as='select' custom onChange={onDayChange} value={day}>
              {days.map((day) => (
                <option id={day} value={day}>
                  {day}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Button variant='primary' type='submit' OnClick={onSubmit}>
          Get My Seinoscope
        </Button>
      </Form>
    </div>
  );
};

export default DatePicker;
