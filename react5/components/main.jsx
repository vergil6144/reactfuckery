import React from 'react'
import Die from './die.jsx'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'
export default function main(){

    let gamewon = false
    const [nos,setnos] = React.useState(() =>gen()) //    const [nos,setnos] = React.useState(gen()) would run on every render

    function gen(){
        return new Array(10).fill(0)
        .map(()=>{return {value:Math.ceil(Math.random() * 6), id:nanoid(), held:false}})
    }
    function hold(id){
        console.log(id)
        setnos(prevnos=>{
            return prevnos.map(item=>{
            return item.id === id ? {...item, held:!item.held}:item
        })
    })
    }
    const dice = nos.map(no=>{
            return <Die key = {no.id} id = {no.id}value ={no.value} held={no.held} hold = {hold}></Die>
    })
    console.log(dice)
    function reset(){
        console.log(nos)
        if(!gamewon){
            setnos(olddie=>olddie.map(die=>die.held?die:{...die,value:Math.ceil(Math.random() * 6)}))

        } else{
            setnos(gen())
        }
    }

    if(nos.every(no=>no.held)&&(nos.every(no=>no.value===nos[1].value))){
        console.log('woo')
        gamewon = true
    }
    function ng(){
        setnos(gen())
    }
    return (
        <main>
            <div className='dietainer'>
                {dice}
            </div>
            <br />
            <button id = "reset" onClick={reset}>{gamewon?"new game":"roll again"}</button>
            {gamewon?<Confetti/>:''}
        </main>
    )
}