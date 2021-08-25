import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
<<<<<<< HEAD
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/counter'

ReactDOM.render(
    <React.StrictMode>
        <Counter/>
=======
import App from './app'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(
    <React.StrictMode>
      <App/>
>>>>>>> 771a87a (add edit in project - counter)
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
