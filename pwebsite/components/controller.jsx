import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Center from './centerc.jsx'
import Blogs from './b.jsx'
import Blog from './blog.jsx'
export default function controller(){
    return (
    // <Center/>
    <Router>
        <Routes>
            <Route path = '/' element = {<Center/>}/>
            <Route path = '/blogs' element = {<Blogs/>}/>
            <Route path = '/blogs/:filename' element = {<Blog/>}/>
        </Routes>
    </Router>
    )
}