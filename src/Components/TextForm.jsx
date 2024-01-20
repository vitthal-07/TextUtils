import React,{useState} from 'react'

export const TextForm = (props) => {
    const [text, setText] = useState("Enter text");

    const onChangeText = (evt)=>{
        setText(evt.target.value);
    }
    const ConvertToUppercase = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Text has been converted to upper case!" , "success");
    }
    const ConvertToLowercase = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Text has been converted to lower case!" , "success");
    }
    const clearText = () =>{
        setText("");
        props.showAlert("Text has been cleared!" , "success");
    }
    const copyText = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied to clipboard!" , "success");
    }
    const removeExtraSpaces = () =>{
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("All extra spaces has been removed!" , "success");
    }
    
  return (
    <>
    <div className="mb-3 my-3" style={props.mode === 'light' ? {color: "#000"} : {color: "#fff"}}>
        <h1 className="my-3">Enter text here</h1>
        <textarea className="form-control" id="myText" style={props.mode === 'dark' ? {color: "#fff",backgroundColor:'#103457'} : {color: "#000",backgroundColor:'#fff'}} onChange={onChangeText} value={text} rows="10"></textarea>
    </div>
    <div className="btns my-1">
        <button type="button" className="btn mx-1 btn-primary" onClick={ConvertToUppercase}>Covert to UpperCase</button>
        <button type="button" className="btn mx-1 btn-primary" onClick={ConvertToLowercase}>Covert to LowerCase</button>
        <button type="button" className="btn mx-1 btn-primary" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button type="button" className="btn mx-1 btn-primary" onClick={clearText}>Clear Text</button>
        <button type="button" className="btn mx-1 btn-primary" onClick={copyText}>Copy Text</button>
    </div>
    <p  style={props.mode === 'light' ? {color: "#000"} : {color: "#fff"}}>{text.trim() === ""? 0 : text.trim().split(/\s+/).length} words {text.length} characters</p>
    </>
  )
}
