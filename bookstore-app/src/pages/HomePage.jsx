import {Link} from 'react-router-dom'
import './styles/HomePage.css'
import React, { useState, useEffect } from 'react';
const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Bookstore</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ipsam tempora sit veniam, quae pariatur neque possimus repellat laudantium cupiditate labore! Tempore consectetur natus laborum delectus repudiandae ipsa. Blanditiis?</p>
            <Link to = "/books">Go to Book List</Link>
        </div>
    )
}

export default HomePage;