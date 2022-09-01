import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { HashRouter } from 'react-router-dom'
import Router from './router'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>  
    <Router />
  </HashRouter>
)
