import React from 'react'
export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false) //set isShown to false and use setisshown to change its value

    function butp(){
        setIsShown(prevshown=>!prevshown) //when i use set state react automatically gives me the previous value of state as an arg, we pass in an arrow function that flips the value 
        console.log(isShown)
    }

    return (
        <div>
            {props.setup ? <h3>{props.setup}</h3>:null}
            {isShown ? <p>{props.punchline}</p>:null} 
            {/* renders if isshown is true */}
            <button onClick={butp}>{isShown ? "hidepunchline":"showpunchline"}</button>
            <hr />
        </div>
    )
}