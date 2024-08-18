import { StrictMode, Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
/*
//en lugar de componentes se puede usar función pero no es la correcta forma
const createButton= ({text})=>{
  return(
    <button>{text}</button>
  )
}

//Solo espera renderizar una cosa
const root=createRoot(document.getElementById('root'))
root.render(
  <Fragment>
    {createButton({text:"hola mundo"})}
    {createButton({text:"hola mundo otra vez"})}
    {createButton({text:"hola mundo de nuevo"})}
  </Fragment>
  
)
*/

//Solo espera renderizar una cosa
const root=createRoot(document.getElementById('root'))
root.render(
  <App />
)