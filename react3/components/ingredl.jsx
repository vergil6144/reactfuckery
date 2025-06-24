export default function ingredl(props){
    const ding = props.ingredients.map(ingredient=>{
        return (
            <li key='ingredient'>{ingredient}</li>
        )
    })
    return (
        <section>
        <ul>
            {ding}
        </ul>
            <br />
            {props.ingredients.length >=4 ? <div className='get-recipe-container'>
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <div className='right'>
                    <button onClick={props.show}>Get recipe</button>
                </div>
            </div> :null}
        </section>
    )
}