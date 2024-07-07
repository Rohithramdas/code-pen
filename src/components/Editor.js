import React,{useState} from "react";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

// it is a text editor which we can controll input and out put

//for open close button



// exportas we want to import in app js
export default function Editor(props){
//destructure
const {
  language,
  displayName,
  value,
  onChange  
}=props
const [open,setOpen]=useState(true);

function handleChange(editor,data,value){
onChange(value);
}

//todownload code
function handleDownload() {
    const element = document.createElement("a");
    const file = new Blob([value], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${displayName}.txt`;
    document.body.appendChild(element);
    element.click();
  }


return (
<div className={`editor-container ${open ? '':'collapsed'}`}>
   
    <div className="editor-title">
       {displayName}
       <button onClick={handleDownload}>
       <i className="fas fa-download"></i>
       </button>
       <button 
       type="button"
       
       onClick={()=>setOpen(prevOpen=>!prevOpen

       )}>  <i className="fas fa-arrows-alt-h"></i></button>
    </div>
<ControlledEditor
onBeforeChange={handleChange}
//  works same as on change event handiler
value={value}
className="code-mirror-wrapper"
options={{
    lineWrapping:true,
    lint:true,
    mode:language,
    theme:'material',
    lineNumbers:true
}}
/>

</div>
);


}