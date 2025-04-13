import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardAnimations.css';

const QuickAccess = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 min-h-screen flex items-center justify-center">
      <div className="w-full">
        <div className="text-center mb-12">
          <h1 className="gradient-text">Quick Access</h1>
        </div>

        {/* Animated Cards Section */}
        <div className="cards">
          <div className="card red">
            <p className="tip">Youtube</p>
            <label className="search-label">
              <input type="text" name="text" required="" placeholder="Enter Your URL Here" />
              <kbd className="slash-icon">/</kbd>
              <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" viewBox="0 0 56.966 56.966">
                <path d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill="currentColor" />
              </svg>
            </label>
          </div>
          <div className="card blue">
            <p className="tip">Instagram</p>
            <label className="search-label">
              <input type="text" name="text" required="" placeholder="Enter Your URL Here" />
              <kbd className="slash-icon">/</kbd>
              <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" viewBox="0 0 56.966 56.966">
                <path d="M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill="currentColor" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAccess; 