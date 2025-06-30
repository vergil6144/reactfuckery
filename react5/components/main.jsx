import React from 'react'
import Die from './die.jsx'
import {nanoid} from 'nanoid'
export default function main(){

    const [nos,setnos] = React.useState(gen())
    function gen(){
        return new Array(10).fill(0)
        .map(()=>{return {value:Math.ceil(Math.random() * 6), id:nanoid(), held:false}})
    }
    function hold(id){
        console.log(id)
    }
    const dice = nos.map(no=>{
            return <Die key = {no.id} id = {no.id}value ={no.value} held={no.held} hold = {hold}></Die>
    })
    console.log(dice)
    function reset(){
        setnos(gen())
    }
    return (
        <main>
            <div className='dietainer'>
                {dice}
            </div>
            <br />
            <button id = "reset" onClick={reset}>clicktoreset</button>
        </main>
    )
}