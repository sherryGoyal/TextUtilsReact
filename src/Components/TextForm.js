import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        console.log("Your text is converted "+text);
        let newText=text.toUpperCase()
        setText(newText)
        // props.showAlert("Text has been converted to uppercase","Success");
    }

    const handleLoClick = ()=>{
        console.log("Your text is converted "+text);
        let newText=text.toLowerCase();
        setText(newText)
        // props.showAlert("Text has been converted to lowercase","Success");
    }

    const handleUpChange= (event)=>{
        console.log("On change");
        setText(event.target.value)
        
    }

    const handleCaseClick = ()=>{
        let newText= text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText)
        // props.showAlert("First letter has been capitalized","Success");
    }

    
    // setText("Update state");
    return (
        <>

            <div className='container my-5'style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleUpChange} style={{backgroundColor : props.mode==='light'?'white':'black',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-warning mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-warning mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-warning mx-2" onClick={handleCaseClick}>capitalize</button>
        
            </div>

            <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>Text Summary</h3>
                <p>your text has {text.split(" ").length-1} words and {text.length} characters </p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
  )
}
                    