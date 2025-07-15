import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Center from './centerc.jsx'
import Blogs from './b.jsx'
export default function controller(){
    return (
    // <Center/>
    <Router>
        <Routes>
            <Route path = '/' element = {<Center/>}/>
            <Route path = '/blogs' element = {<Blogs/>}/>
        </Routes>
    </Router>
    )
}