import {createRoot} from 'react-dom/client'
import H from './components/header.jsx'
import EN from './components/entry.jsx'
import data from './data.js'
const root = createRoot(document.getElementById('root'))
console.log(data)
const elems = data.map(entry=>{
    return (
        <EN
            key = {entry.id}
            {...entry} //"Take every key-value pair from the entry object and pass it as a separate prop to the <ENTRY /> component."
        />
    )
})
root.render(
    <>
    <H/>
    {elems}
    </>
)