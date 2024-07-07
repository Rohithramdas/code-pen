import React,{useState,useEffect} from "react";
import Editor from './Editor';
import useLocalStorage from "../hooks/useLocalStorage";
function App() {
const [html,setHtml]=useLocalStorage('html','')
const [css,setCss]=useLocalStorage('css','')
const [js,setJs]=useLocalStorage('js','')
const [srcDoc,setsrcDoc]=useState('')
// for changes to happen in delay



useEffect(()=>{
    const timeout=setTimeout(()=>{
setsrcDoc(`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
</html>
`)
    }, 250)
    return ()=>clearTimeout(timeout)
},[html,css,js])





return (
<>
<div className="heading"><h1>
    
    CODE - PEN</h1>
  
</div>
{/* 3editors */}
<div className="pane top-pane">
<Editor 
language="xml"
displayName="HTML"
value={html}
onChange={setHtml}
/>
<Editor 
language="css"
displayName="CSS"
value={css}
onChange={setCss}
/>
<Editor 
language="javascript"
displayName="JS"
value={js}
onChange={setJs}
/>
</div>


{/* output rendering frame */}
<div className="pane">
<iframe
srcDoc={srcDoc}
title="output"
sandbox="allow-scripts"
frameBorder="0"
width="100%"
height="100%"
/>

</div>

</>

);
}

export default App;
