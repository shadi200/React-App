import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

let Images = {
  avatar: require('./images/avataaars.svg').default,
  cabin: require('./images/cabin.png'),
  cake: require('./images/cake.png'),
  circus: require('./images/circus.png'),
  game: require('./images/game.png'),
  safe: require('./images/safe.png'),
  submarine: require('./images/submarine.png'),
  notFound: require('./images/notFound.jpg')
}
export default Images
