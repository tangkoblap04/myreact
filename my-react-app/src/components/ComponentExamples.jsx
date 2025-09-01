import React from 'react';
import Welcome from './Welcome';
import Greeting from './Greeting';
import Clock from './Clock';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#667eea',
                marginBottom: '40px'
            }}>
                My react components!!
            </h1>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#b5ddf8ff'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    Communication!!
                </h2>
                <Welcome />
                <Greeting />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#b5ddf8ff'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    Time!!
                </h2>
                <Clock />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#b5ddf8ff'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    My profile!!
                </h2>
                <UserCard />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#b5ddf8ff'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    TodoList!!
                </h2>
                <TodoList />
            </section>
        </div>
    );
}

export default ComponentExamples;