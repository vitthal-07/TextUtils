import React,{useState} from 'react'

export const TextForm = () => {
    const [text, setText] = useState("Enter text");

    const onChangeText = (evt)=>{
        setText(evt.target.value);
    }

    const ConvertToUppercase = ()=>{
        setText(text.toUpperCase());
    }
    const ConvertToLowercase = ()=>{
        setText(text.toUpperCase());
    }
    const clearText = () =>{
        setText("");
    }
    const copyText = () =>{
        let text = document.querySelector("#myText");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const removeExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
  return (
    <>
    <div class="mb-3">
        <h1 className="my3">Enter text here</h1>
        <textarea class="form-control" id="myText" onChange={onChangeText} value={text} rows="3"></textarea>
    </div>
    <div className="btns my-1">
        <button type="button" class="btn mx-1 btn-primary" onClick={ConvertToUppercase}>Covert to UpperCase</button>
        <button type="button" class="btn mx-1 btn-primary" onClick={ConvertToLowercase}>Covert to LowerCase</button>
        <button type="button" class="btn mx-1 btn-primary" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button type="button" class="btn mx-1 btn-primary" onClick={clearText}>Clear Text</button>
        <button type="button" class="btn mx-1 btn-primary" onClick={copyText}>Copy Text</button>
    </div>
    </>
  )
}
