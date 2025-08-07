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
                        if (user.age >= 18) {
                            return <p>You are an adult mr.{formatName(user)}</p>
                        }
                        else {
                            return <p>You are young mr.{formatName(user)}</p>
                        }
                    })()
                }
            </section>
            <section>
                <h2>📋 การแสดงผล Lists</h2>
                <h3>งานอดิเรกของ {user.firstName}:</h3>
                <ul>
                    {user.hobbies.map((hobby, index) => (
                        <li key={index}>
                            {index + 1}. {hobby}
                        </li>
                    ))}
                </ul>

                <div className="product-list">
                    <h3>รายการสินค้า</h3>
                    {[
                        { id: 1, name: 'Coconut cake', price: 125, inStock: true },
                        { id: 2, name: 'Chocolate cake', price: 125, inStock: true },
                        { id: 3, name: 'Banoffe', price: 145, inStock: false }
                    ].map(product => (
                        <div key={product.id} className="product-item">
                            <span>{product.name}</span>
                            <span> - ฿{product.price.toLocaleString()}</span>
                            <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                                {product.inStock ? ' ✅ มีสินค้า' : ' ❌ สินค้าหมด'}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>🧩 React Fragment</h2>
                <p>ใช้เมื่อไม่ต้องการ wrapper element:</p>
                <React.Fragment>
                    <h3>หัวข้อ</h3>
                    <p>เนื้อหา</p>
                </React.Fragment>

                <>
                    <h3>หัวข้ออื่น</h3>
                    <p>เนื้อหาอื่น</p>
                </>
            </section>

            <section>
                <h2>🎯 Event Handling ใน JSX</h2>
                <input
                    type="text"
                    placeholder="พิมพ์อะไรก็ได้..."
                    onChange={(e) => console.log('พิมพ์:', e.target.value)}
                />

                <select onChange={(e) => alert(`เลือก: ${e.target.value}`)}>
                    <option value="">-- เลือกภาษา --</option>
                    <option value="js">JavaScript</option>
                    <option value="py">Python</option>
                    <option value="java">Java</option>
                    <option value="go">Go</option>
                </select>
            </section>

            <section>
                <h2>💬 Comments ใน JSX</h2>
                <p>Comment ใน JSX ต้องอยู่ใน {/* curly braces */}</p>
                {
                    // นี่ก็เป็น comment เช่นกัน
                    // แต่อยู่ใน JavaScript expression
                }
            </section>
        </div>
    )
}

export default JSXExample