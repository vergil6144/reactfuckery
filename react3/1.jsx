import H from './components/header.jsx'
import {createRoot} from 'react-dom/client'
import Add from './components/form.jsx'


const root = createRoot(document.getElementById('root'))
console.log(H)
root.render(
    <>
        <H/>
        <Add/>
    </>
)   