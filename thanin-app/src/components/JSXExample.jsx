import React from 'react';

function JSXExamples() {
    const greeting = <h1>Hello, React with JSX!!!</h1>
    const name = 'Thanin';
    const age = 21;
    const currentYear = new Date().getFullYear

    const user = {
        firstName: 'Thanin',
        lastName: 'Tangkoblap',
        age: 21,
        hobies: ['Taekwondo', 'MuayThai', 'Sleep']

    };

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`
    }

    const isLoggedIn = true;
    const hasNotification = 3;

    return (
        <div className='JSXExample'>
            <h1>JSX Example</h1>
            <section>
                <h2>Greeting</h2>
                {greeting}
                <p>Hello mr.{name} Age : {age} yearold.</p>
                <p>Current year is {currentYear}</p>
                <p>Full name : {formatName(user)}</p>
            </section>

            <section>
                <h2>Attributes in JSX</h2>
                <div className='card'>
                    <p className='text-primary'>
                        Use className instead class.
                    </p>
                </div>
                <button onClick={() => alert('Clicked!!!')} onMouseEnter={() => console.log('Mouse Entered!')}>
                    Hover me or click me!
                </button>

                <div style={{
                    backgroundColor: '#E8f5E8',
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '10px'
                }}>
                    <p style={{ color: '#2D4A2B', fontWeight: 'bold' }}>
                        Inline styles use with object.
                    </p>

                </div>
            </section>
            <section>
                <h2>Conditional Rendering</h2>
                <p>
                    Status : {isLoggedIn ? 'Login already!' : 'Not login0'}
                </p>

                {hasNotification > 0 && (
                    <div className='notification'>
                        You've new {hasNotification}.
                    </div>
                )}
                {
                    (() => {
                        if (user.age >= 180) {
                            return <p>You are an adult mr.{formatName(user)}</p>
                        }
                        else {
                            return <p>You are young mr.{formatName(user)}</p>
                        }
                    })()
                }
            </section>
        </div>
    )
}

export default JSXExample