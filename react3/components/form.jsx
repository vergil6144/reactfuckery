import React from 'react'
import Rs from './data.jsx'
import Ingredl from './ingredl.jsx'

import { getRecipeFromMistral } from "../ai.js"

export default function Add(){
    const [ingredients, setIngredients] = React.useState([])
    //react.useState is used to essentially create modifiable properties. i pass in the value of the props, it returns the state's assigned value and a function to be used to change the state.
    function sub(formdata){
        console.log('subed')
// done for us by action        event.preventDefault()
//action automatically gives us the formdata        const formdata = new FormData(event.currentTarget)
        const ingred = formdata.get('ingredient') //bcos that's the name im attaching in the form
        console.log(ingred)
        setIngredients((previngred,)=>{ //updating the state, will cause a rerender, previngred is the automatically passed in value of the state before
            return [...previngred, ingred]
        })
    }
    const ding = ingredients.map(ingredient=>{
        return (
            <li key='ingredient'>{ingredient}</li>
        )
    })
    const [iss, setiss] = React.useState(false)
    function show(){
        setiss(prev=>!prev)
    }

    const [rec, setres] = React.useState('')

    async function getrecipe(){
        const gen = await getRecipeFromMistral(ingredients)
        setres(gen)
    }
    const resection = React.useRef(null)
    React.useEffect(()=>{
        if(rec &&resection){
            resection.current.scrollIntoView({behavior:"smooth"})
        }
    },[rec])

    return (
        <main>
            <form action={sub}>
                <input type="text" placeholder="e.g. oregano" name = "ingredient"/>
                {/* what we submit is assigned to ingredient */}
                <button>Add ingredient</button>
            </form>
            {ingredients.length >0 ? <h2>Ingredients on hand</h2>:null}
            {/* <ul>
                <Ingredl ingredients = {ingredients}/>
            </ul> */}
            {/* {ingredients.length >=4 ? <div className='get-recipe-container'>
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <div className='right'>
                    <button onClick={show}>Get recipe</button>
                </div>
            </div> :null} */}
            <Ingredl ref = {resection}ingredients={ingredients} getrecipe ={getrecipe}/>
            <section className='gotten'>
                {rec && <Rs recipe = {rec}/>}
            </section>
        </main>
    )
}