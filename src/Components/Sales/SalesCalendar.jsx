
import React, { useState } from 'react';

const SalesCalendar = ({ selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date(); // Get current date
  
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
    const firstDay = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    while (days.length % 7 !== 0) {
      days.push(null);
    }

    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    return weeks.map((week, index) => (
      <div key={index} className="row justify-content-center mb-3">
        {week.map((day, i) => (
          <div
            key={i}
            className="col d-flex justify-content-center align-items-center"
            onClick={() => {
              if (day) {
                onDateSelect(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
              }
            }}
          >
            <div
              className={`square-block ${
                day &&
                today.getDate() === day &&
                today.getMonth() === currentMonth.getMonth() &&
                today.getFullYear() === currentMonth.getFullYear()
                  ? 'bg-info text-white' 
                  : ''
              }`}
            >
              {day || ''}
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="container mt-4">
    

      <div className="d-flex justify-content-between align-items-center mb-4 bg-success text-white p-3 rounded">
   

        <button className="btn btn-outline-primary bg-primary text-white btn-lg" onClick={handlePrevMonth}>
          {"<"}
        </button>

        <span className="h3">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </span>

        <button className="btn btn-outline-primary bg-primary text-white btn-lg" onClick={handleNextMonth}>
          {">"}
        </button>
      </div>

      {/* <div className="calendar-grid">
        <div className="row text-center font-weight-bold mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="col square-day">{day}</div>
          ))}
        </div>
        {renderCalendar()}
      </div> */}

<div className="container-fluid mt-4">
  {/* FLEX CONTAINER for Calendar & Events */}
  <div className="row">
    
    {/* 🗓️ Calendar Section */}
    <div className="col-md-7">  
      <div className="calendar-grid">
        <div className="row text-center font-weight-bold mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="col square-day">{day}</div>
          ))}
        </div>
        {renderCalendar()}
      </div>
    </div>

    {/* 📌 Upcoming Events Section */}
    <div className="col-md-5">
      <div className="p-3 bg-light shadow rounded">
        <h4 className="text-primary">📅 Upcoming Events</h4>
        <ul className="list-group">
          <li className="list-group-item">Event 1 - March 30</li>
          <li className="list-group-item">Event 2 - April 5</li>
         
        </ul>
      </div>
    </div>

  </div> {/* End of Row */}
</div>

    </div>
  );
};

export default SalesCalendar;
