import React, {useState} from "react";


export const TextForm = (props) => {
    const [text, setText] = useState("");
    const [fWord,findWord] = useState("");
    const [rWord,replaceWord] = useState("");

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handlelowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");

    }
    const handleclearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared","success");

    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!","success");
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed!","success");

    }
    const handleFindChange = (event)=>{
        findWord(event.target.value);
    }
    const handleReplaceChange = (event)=>{
        replaceWord(event.target.value);
    }
    const handleReplaceClick = ()=>{
        const newText = text.replaceAll(fWord,rWord);
        setText(newText);
        props.showAlert("Text Replaced","success");

    }
   

    // text = "newtext" // Wrong way to change the state
    // setText = "newtext" // Correct way to change the state

  return (
    <>
    <div className="container " style={{color: props.mode === 'dark'?'white':'black'}}>
      
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea name="myBox" value={text} className="form-control "id="myBox" rows="10" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white',color: props.mode === 'dark'?'white':'#042743'}}></textarea>
      </div>
      <div className="d-flex flex-wrap">
      <button className="btn btn-primary me-1 my-2" onClick={handleUpClick} >
        Convert ToUppercase
      </button>
      <button className="btn btn-primary me-1 my-2" onClick={handlelowerClick} >
        Convert ToLowercase
      </button>
      <button className="btn btn-primary me-2 my-2" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary me-2 my-2" onClick={handleclearClick} >
        Clear Text
      </button>
      <button className="btn btn-primary me-1 my-2" onClick={handleCopy} >
        Copy
      </button>
      <textarea  className="fs-5 mt-2 me-2" style={{height:"36px"}} value={fWord} cols="9" rows="1" onChange={handleFindChange} placeholder="Find"></textarea>
      <textarea  className="fs-5 mt-2 me-2" style={{height:"36px"}} value={rWord} cols="10" rows="1" onChange={handleReplaceChange} placeholder="Replace"></textarea>
      <button className="btn btn-primary me-4 my-2" onClick={handleReplaceClick}>
        Replace
      </button>
      </div>
      
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h2>Your text summary </h2>
    <p>{text===""?0:text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.trim().length} characters</p>
    <p>{text ===""?0:0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  );
};
export default TextForm;
