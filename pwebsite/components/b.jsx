import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
export default function blogs() {
    const [tr, settr] = useState([])
    useEffect(() => {
        const fetchbs = async () => {
            const listres = await fetch('https://api.github.com/repos/vergil6144/wdfuckery/contents/wd3js/trying.txt?ref=main')
            const ll = await fetch('https://api.github.com/repos/vergil6144/wdfuckery/contents/wd3js?ref=main')
            // console.log(await ll.json())
            const jll = await ll.json()
            const txtll = await jll.filter(file => file.name.endsWith('.txt'))
            const cont = await Promise.all(txtll.map(async (file) => {
                const res = await fetch(file.download_url)
                const content = await res.text()
                return { name: file.name, content }
            }))
            //console.log('hi',txtll)
            settr(cont)
            console.log(tr)
            //console.log(tr)

            const lr2 = await listres.json()
            const rawRes = await fetch(lr2.download_url);  // fetch raw file content
            const text = await rawRes.text();
            //console.log('hi',text)
        }
        fetchbs()

    }, [])
    const tex = async (e) => {
        const raw = await fetch(e.download_url)
        const text = await raw.text();
        return text
    }

    const Bl = props => {
        const arr = props.arr

        //console.log('arr',arr)
        return (
            <div>
                {arr.map(e => {
                    console.log(e)
                    console.log(tex(e))
                    const short = e.content.slice(0, 150)
                    return (
                        <>
                            <p class = 'nm'>{e.name}</p>
                            <p class = 'body'>
                                <p class = 'cont'>{short+' '} 
                                <Link to={`/blogs/${e.name}`} state={{ blog: e }}>…</Link></p>
                                <hr style={{ border: '0', height: '1px', background: '#54586f' }} />
                            </p>
                            
                        </>
                    )
                })}
            </div>
        )
    }
    return (
        <>
            <head>
                {/* <style>{` .bb { background-image: url('../bg2.png'); display:flex; justify-content:center; color:white;    background-position-x: right; width: 54vw; max-height: 100vw } h1{font-size:25px; font-weight:500}`}</style> */}
            </head>
            <body class='bb'>
                <div class ='center'>
                    <h1 class='tl'>aditya</h1>
                    <Bl arr={tr} />
                </div>
            </body>
        </>
    )
}

//shift alt f to auto indent