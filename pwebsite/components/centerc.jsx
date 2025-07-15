import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import L from './l.jsx' 
import React from 'react'
import Blogs from './b.jsx'

export default function center(){
    const [hover,sethover] = React.useState([false,false,false])
    console.log(hover)
    const thing = p =>{
        sethover((prev)=>{
            //console.log(prev[p])
            const up = [...prev]
            up[p] = !up[p]
                        // console.log('sm')
                        // console.log(prev[p])

            return up //if you mutate prev directly instead of copying it into up and changing that react won't re render
            //console.log(prev[p])
        })
        console.log(hover)
    }
    return (
        <> 
        <main className='c'>
            {/* <h1>or</h1> */}
            <pre style={{fontFamily: 'monospace', color: '#FF79C6', fontSize:8+'px  '}}>{L}</pre>
            <div className='om'>
                {/* <a onMouseEnter = {()=>thing(0)} onMouseLeave={() => thing(0)} href="" style = {{color:hover[0]?'#FF79C6':'white'}}>PROJECTS</a>
                <a onMouseEnter = {()=>thing(1)} onMouseLeave={() => thing(1)} href="" style = {{color:hover[1]?'#FF79C6':'white'}}>BLOG</a>
                <a onMouseEnter = {()=>thing(2)} onMouseLeave={() => thing(2)} href="" style = {{color:hover[2]?'#FF79C6':'white'}}>ABOUT</a> */}
                <Link to='/blogs' onMouseEnter = {()=>thing(0)} onMouseLeave={() => thing(0)} href="" style = {{color:hover[0]?'#FF79C6':'white'}}>PROJECTS</Link>
                <Link to='/blogs' onMouseEnter = {()=>thing(1)} onMouseLeave={() => thing(1)} href="" style = {{color:hover[1]?'#FF79C6':'white'}}>BLOG</Link>                
                <Link to='/blogs' onMouseEnter = {()=>thing(2)} onMouseLeave={() => thing(2)} href="" style = {{color:hover[2]?'#FF79C6':'white'}}>ABOUT</Link>
                
            </div>
        </main>
        </>
    )
}