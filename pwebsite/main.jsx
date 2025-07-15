import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Center from './components/centerc'
import React from 'react-dom/client'
import Controller from './components/controller'
const root = React.createRoot(document.getElementById('root'))
root.render(
    <Controller/>
)