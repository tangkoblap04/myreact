import React from 'react';

const Clock = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('th-TH');
    const dateString = now.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
    
    // Return JSX
    return (
        <div className="clock">
            <h3>🕐 Current time</h3>
            <p className="date">{dateString}</p>
            <p className="time">{timeString}</p>
        </div>
    );
};

export default Clock;