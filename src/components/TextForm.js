import React, { useState } from 'react'

export default function TextForm(props) {

    const [text,setText]=useState('');
    const onChangeHandler=(e)=>{
     setText(e.target.value)
    }

const UpCaseHandeler=()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert('success','Converted to uppercase')
}
const lowCaseHandeler=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert('success','Converted to lowercase')
}
const clearTextHandeler=()=>{
    let newText='';
    setText(newText)
    props.showAlert('success','Text cleared')
}
const removeSpacesHandeler=()=>{
    let newText=text.split(/[ ]+/).join(' ')
    setText(newText)
    props.showAlert('success','Extra spaces removed')
}
const capatalizeHandeler=()=>{
    let newText=text.trim().split(/[ ]+/).join(' ').split(' ').map((word)=>{return word[0].toUpperCase() + word.slice(1)    }).join(' ')
    // console.log(newText)
    setText(newText)
     props.showAlert('success','text capatalized')
}
const copyTextHandeler=()=>{
    // let newText=document.getElementById('exampleFormControlTextarea1')
    // // console.log(newText)
    // newText.select()
    navigator.clipboard.writeText(text)
    // document.getSelection().removeAllRanges();
    // setText(newText)
    props.showAlert('success','Text copied to clipboard')
}











  return (
    <div className={`container my-3 text-${props.mode==='light'? 'dark':'light'}`}>
        <h1>{props.heading}</h1>
<div className='mb-3'>
  <textarea className={`form-control   text-${props.mode==='light'? 'dark':'light'}`} style={{backgroundColor:props.mode==='light'? 'white':'#28283b'}}  id="exampleFormControlTextarea1" rows="8" value={text} onChange={onChangeHandler} placeholder='write text here!!'> </textarea>
  <button disabled={text.length===0}  className='btn btn-primary my-2'onClick={UpCaseHandeler}>Convert To UpperCase</button>
  <button disabled={text.length===0} className='btn btn-primary my-2 mx-2'onClick={lowCaseHandeler}>Convert To LowerCase</button>
  <button disabled={text.length===0} className='btn btn-primary my-2'onClick={removeSpacesHandeler}>Remove Extra Spaces</button>
  <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={clearTextHandeler}>Clear Text</button>
  <button disabled={text.length===0} className='btn btn-primary my-2'onClick={capatalizeHandeler} >Capatalize</button>
  <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={copyTextHandeler}>Copy Text</button>
   <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words {text.length}Characters </p>
    <p>will read in {0.008*text.split(' ').filter((element)=>{return element.length!==0}).length} minutes     </p>
    <div>
        <h2>Preview</h2>
    <p>{text.length<=0? 'Nothing to preview':text}</p>
    </div>
   
</div>
    </div>
  )
}
