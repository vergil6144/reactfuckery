import React from "react"


export default function main(){
    const [meme,setmeme] = React.useState({
    ttext: 'one does not simply',
    btext: 'walk into mordor',
    img: "http://i.imgflip.com/1bij.jpg"
    })
    const [memes,setallmemes] = React.useState([])
    React.useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes').then(data=>data.json()).then(data=>setallmemes(data.data.memes))
    },[])

    function setmi(){
        const rando = Math.floor(Math.random()*memes.length)
        console.log(rando)
        const thing = memes[rando].url
        setmeme(prev=>({
            ...prev,
            img:thing
        }))
    }

    function ttc(event){
        const {value, name} = event.currentTarget
        console.log(value)
        console.log(meme.ttext)
        setmeme(prev=>({ //implicit return
            ...prev,
            [name]: value
        
        }))
    }

    return (
        <main>
            <div className="form">
                <label> Top text
                    <input type="text"
                    placeholder='One does not simply'
                    name='ttext' 
                    onChange={ttc}
                    value = {meme.ttext}/> 
{/* important for accepting input */}
                </label>
                <label>Bottom text
                    <input type="text"
                    placeholder='Walk into Mordor' 
                    name="btext"
                    onChange={ttc}
                    value={meme.btext}/>
                </label>
                <button onClick={setmi}>Get a new image</button>
            </div>
            <div className="meme">
                <img src={meme.img} />
                <span className="top">{meme.ttext}</span>
                <span className="bottom">{meme.btext}</span>
            </div>
        </main>
    )
}