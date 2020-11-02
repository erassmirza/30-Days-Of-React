import React from 'react';
import ReactDOM from 'react-dom';
import htmlLogo from './images/html_logo.png'
import cssLogo from './images/css_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'
import asabeneh from './images/asabeneh.jpg'

// JSX element, header
// const header = (
//   <header>
//     <div className='header-wrapper'>
//     </div>
//   </header>
// )

const fet = (
  <div className="logo-heading">
    <h2>Front End Technologies</h2>
  </div>
)

const logo = (
  <div className="logo-container">
    <img className="logo" src={htmlLogo} alt='html logo' />
    <img className="logo" src={cssLogo} alt='css logo' />
    <img className="logo" src={jsLogo} alt='js logo' />
    <img className="logo" src={reactLogo} alt='react logo' />
  </div>
)

const level2 = (
  <div className="level2">
    {fet}
    {logo}
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      {level2}
    </div>
  </main>
)

// JSX element, footer
// const footer = (
//   <footer>
//     <div className='footer-wrapper'>
//     </div>
//   </footer>
// )

// JSX element, app
const app = (
  <div className='app'>
    {/* {header} */}
    {main}
    {/* {footer} */}
  </div>
)
// const jsxElement = <h1>This is a JSX Element</h1>
const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)