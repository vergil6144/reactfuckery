import pads from "./pads"
import React from 'react'
export default function App(props) {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    const [padss,changepads] =React.useState(pads) //inital value of padss is set to pads

    const ps = padss.map((object)=>{

        function toggle(){
            console.log(object.id)
            changepads(prev=>{ //only way to change the state of padss, prev is the previous value of pads automatically passed into this func
                return prev.map(btn=>{
                    return btn.id===object.id?{...btn, on:!btn.on}:btn
                })
            })
        }
        return (
            <button style = {{backgroundColor:object.color}} id = {object.id} key={object.id} className={object.on?'on':'off'} onClick={toggle}></button> //we use onn and not object.on because object.on does not change with being clicked, onn does.
        )
    })

    return (
        <main>
            <div className="pad-container">
                {ps}
            </div>
        </main>
    )
}
