import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <header className="header">
                <h1>Welcome to Our Website</h1>
                <p>Your journey starts here</p>
                <button className="cta-button">Get Started</button>
            </header>
            <section className="features">
                <div className="feature">
                    <h2>Feature One</h2>
                    <p>Description of feature one.</p>
                </div>
                <div className="feature">
                    <h2>Feature Two</h2>
                    <p>Description of feature two.</p>
                </div>
                <div className="feature">
                    <h2>Feature Three</h2>
                    <p>Description of feature three.</p>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
