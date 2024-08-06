import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  Card from './component/card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Card username="Hardik Gohil" age = "18" Hobby="Cricket, Gameing" Skill = "Css, Html, JavaScript" Address ="Nana Varchha, Surat" Pincode =" 395006" Email="hardikgohil4700@gmail.com" Contact="8511001899"/>
    </React.StrictMode>,
)
