import React from "react"


export default function main(){
    const [meme,setmeme] = React.useState({
    ttext: 'one does not simply',
    btext: 'walk into mordor',
    img: "http://i.imgflip.com/1bij.jpg"
    })
    const [memes,setallmemes] = React.useState([])
    React.useEffect(()=>{ //use effect runs whenever anything in its dependencies array changes, if there isn't a dependecies array it runs constantly, if there is an empty dependencies array it runs once when the page loads
        fetch('https://api.imgflip.com/get_memes').then(data=>data.json()).then(data=>setallmemes(data.data.memes))
    },[])

    function setmi(){
        const rando = Math.floor(Math.random()*memes.length)
        console.log(rando)
        const thing = memes[rando].url
        setmeme(prev=>({ //implicit return
            ...prev,//all the properties of prev (prev.1 = smthn, prev.2 - smthn)
            img:thing //changing this one thing
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