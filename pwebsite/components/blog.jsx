import { useParams } from "react-router"
import { useLocation } from 'react-router-dom';

export default function fullblog(props){
    console.log(props)
    const {filename} = useParams() // get to use filename because that's how its defined in controller.jsx (/blogs/:filename)
    console.log(filename)
    const location = useLocation()
    const blog = location.state?.blog
    console.log(blog)
    return (
        <>
        <h1>tryin</h1>
        <h1>{blog.content}</h1>
        </>
    )
}