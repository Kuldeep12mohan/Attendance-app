import React, { useEffect, useState } from 'react';
import './Calendar.css';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import PercentageWheel from './PercentageWheel';
import axios from "axios";

const Calendar = ({subject}) => {
  const [colors, setColors] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  useEffect(() => {
    const putData = async () => {
        try {
          const log = await axios.post(`http://localhost:3000/api/v1/subject/${subject}`, {
            subjectName: subject,
            colors: {
              colors: colors
            },
            red: red,
            green: green
          });
          console.log(log);
        } catch (error) {
          console.error("Error:", error);
        }
    };
    putData();
  }, [colors]); 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/subject/${subject}`);
        console.log("Response data:", response.data.sub.colors.colors);
        setColors(response.data.sub.colors.colors);
        setRed(response.data.sub.red);
        setGreen(response.data.sub.green);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []); 

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const firstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setSelectedDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const handleItemClick = (day, color) => {

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const key = `${year}-${month}`;
    const updatedColors = { ...colors };
    if (!updatedColors[key]) {
      updatedColors[key] = Array(daysInMonth(year, month)).fill("white");
    }
    if (updatedColors[key][day] === "red") setRed(red => red - 1);
    if (updatedColors[key][day] === "green") setGreen(green => green - 1);
    if (color === "pink") setRed(red => red + 1);
    if (color === "lightgreen") setGreen(green => green + 1);
    updatedColors[key][day] = color;
    setColors(updatedColors);
  };

  const getMonthColors = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const key = `${year}-${month}`;
    return colors[key] || Array(daysInMonth(year, month)).fill("white");
  };

  return (
    <>
      <div className="calendar">
        <div className="header">
          <button onClick={handlePrevMonth}>&lt;</button>
          <h2>{selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="days">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div className="day" key={day}>{day}</div>
          ))}
        </div>
        <div className="dates">
          {[...Array(firstDayOfMonth(selectedDate.getFullYear(), selectedDate.getMonth())).keys()].map(() => (
            <div className="date empty" key={Math.random()} /> // Use a unique key for each empty div
          ))}
          {[...Array(daysInMonth(selectedDate.getFullYear(), selectedDate.getMonth())).keys()].map(day => (
            <div className="date" key={day + 1}>
              <Dropdown
                menu={{
                  items: [
                    {
                      label: <div onClick={() => handleItemClick(day, 'lightgreen')}>Attended</div>,
                      key: '0',
                    },
                    {
                      label: <div onClick={() => handleItemClick(day, 'pink')}>Missed</div>,
                      key: '1',
                    },
                  ],
                }}
                trigger={['click']}
              >
                <a onClick={e => e.preventDefault()}>
                  <Space
                    className='hover:cursor-pointer'
                    style={{
                      backgroundColor: getMonthColors()[day],
                      width: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}>
                    {day + 1}
                    {/* <DownOutlined /> */}
                  </Space>
                </a>
              </Dropdown>
            </div>
          ))}
        </div>
      </div>
      <div>
        <PercentageWheel percentage={(red === 0 && green === 0) ? 0 : Number((green / (green + red) * 100)).toFixed(1)} />
      </div>
    </>
  );
};

export default Calendar;
