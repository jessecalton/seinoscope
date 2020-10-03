import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const DatePicker = () => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    getYears();
  }, []);

  const getYears = () => {
    let currentYear = new Date().getFullYear();
    let selectableYears = [];
    for (
      var yearBoundary = currentYear - 120;
      currentYear > yearBoundary;
      currentYear--
    ) {
      selectableYears.push(currentYear);
      // setYears((prevState) => [...prevState, yearBoundary]);
    }
    setYears(selectableYears);
  };

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

  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group controlId='exampleForm.SelectCustom'>
            <Form.Label>Year</Form.Label>
            <Form.Control as='select' custom>
              {years.map((year) => (
                <option>{year}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='exampleForm.SelectCustom'>
            <Form.Label>Month</Form.Label>
            <Form.Control as='select' custom>
              {monthMap.map((month) => (
                <option>{month}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default DatePicker;
