import React from 'react';
import './login.css';
import house from '../../assets/3d-house-plans 2.png'
import vector from '../../assets/Vector.svg'
import vector2 from '../../assets/Vector2.svg'



const Login = () => {
  return (
    <div className="login-container">
      <div>
        <img src={vector} className='vector' />
        <h4 className='logo'>
          <div className='elipse'>
            <div className='elipse2'>
              <div className='elipse3'></div>
            </div>
            
          </div>
          Real Estate Suite</h4>
      </div>

      <div className="left-section">
        <h1>Welcome</h1>
        <form>
          <input type="email" placeholder="Email" />
          <div className="password-input">
            <input type="password" placeholder="Password" />
            <span className="password-toggle">&#128065;</span>
          </div>
          <div className="keep-logged-in">
            <input type="checkbox" id="keep-logged-in" />
            <label htmlFor="keep-logged-in">Keep connect logged in</label>
          </div>
          <button type="submit">Login</button>
        </form>
        <a href="#">Forgot Password?</a>
      </div>
      <div className="right-section">
        <div className="image-container">
          <img src={house} alt="House Blueprint" />
        </div>
      </div>
      <img src={vector2} className='vector2'/>
    </div>
  );
};

export default Login;
