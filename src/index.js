/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Main() {
  return (
    <div className='container'>
      <div className='left'></div>

      <div className='right'>
        <div className='right-content'>
          <p className='form-title'>Login to Continue</p>
          <div className='all-field'>
            <input type='text' placeholder='Email' id='email' />
            <input type='password' placeholder='Password' id='password' />
          </div>
          <div id='other-options'>
            <div id='remember'>
              <input type='checkbox' id='remember-check' />
              <label>Remember</label>
            </div>
          </div>
          <a href='#'>Forget Password</a>
          <button id='login-btn'>Login</button>
          <p>
            or <a href='#'>Sign up</a> using
          </p>
          <div id='app-links'>
            <div className='app-1'></div>
            <div className='app-2'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDom.render(<Main />, document.querySelector('#root'));
