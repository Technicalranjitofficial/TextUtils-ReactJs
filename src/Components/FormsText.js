
import React, {useState} from 'react'



export default function FormsText(props) {
  const [text,setText] = useState("Enter Your Text Here,");

  const changeText =(event)=>{

    setText(event.target.value);

  }
  const convertToUpperCse =()=>{

    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert('Converted to UpperCase','success');

  }
  const convertToLowerCse =()=>{

    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase','success');
    

  }
  const clearText =()=>{

    
    setText("")
    props.showAlert('Text Cleared!','success');

  }
  function copyToClipBoard() {

    var content = document.getElementById('myBox');
    
    content.select();
    document.execCommand('copy');
    props.showAlert('Text Copied','success');

}
  const removeExtraSpace=()=> {

    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra Spaces has been removed.','success');

}
  const ExtractEmailFromText=()=> {

   console.log("Extract");

}



  return (
    <>
    <div className="mb-3">
       <label htmlFor="exampleFormControlTextarea1 text" className={`form-label text-${props.mode==='dark'?'light':'dark'}`}>Enter Your Text Below:</label>
      <textarea className="form-control" value={text} onChange={changeText} id="myBox" rows="8"></textarea>
    </div>
    <div className="container">

      <button className="btn btn-primary" onClick={convertToUpperCse}>ConvertToUpperCase</button>
      <button className="btn btn-success mx-1" onClick={convertToLowerCse}>ConvertToLowerCase</button>
      <button className="btn btn-danger mx-1" onClick={clearText}>Clear</button>
      <button className="btn btn-danger mx-1" onClick={copyToClipBoard}>CopyToClipBoard</button>
      <button className="btn btn-danger mx-1" onClick={removeExtraSpace}>Remove Extra Space</button>
      <button className="btn btn-danger mx-1" onClick={ExtractEmailFromText}>ExtractEmailFromText</button>
    </div>

    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
      <h3>Text Summary:</h3>
      <p>Total word: {text?text.split(" ").length:'0'}  Total character : {text.length}</p>
      {text?0.008*text.split(" ").length:'0'} Min to read
    </div>

    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
      <h3>Preview:</h3>
      <p>{text?text:"Please Write something to preview here."}</p>
    </div>

    </>
  )
}
