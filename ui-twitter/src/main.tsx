import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import twitterLogo from './assets/twitter-logo.svg'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img className="logo" src={twitterLogo} alt="Logo" />

        <nav></nav>

        <button className='new-tweet' type='button'>
          Tweet
        </button>
        
      </aside>
      <div className='content'></div>

    </div>
  </React.StrictMode>,
)
