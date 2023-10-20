import React, { useState } from 'react'


export default function Form(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted too upper Case", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted too lower Case", "success");
    }

    const handleClearClick = () => {
        let newText = ('');
        setText(newText)
        props.showAlert("Text has been Cleared", "success");
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }

    const handleCopyClick = ()=>{
        let newText = document.getElementById("textBox")
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text copyed to Clipbord", "success");

    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space has been Removed", "success");
    }

    return (
        <>
            <div className='container' style={{color: props.mode === 'dark'? 'White':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3 " >
                    <textarea className="form-control" value={text} onChange={handleOnChange} placeholder='enter text here' style={{backgroundColor: props.mode === 'dark'? '#042743':'white' && props.mode === 'dark'? 'darkGreen':'white' , color: props.mode === 'dark'? 'white':'black' }} id="textBox" rows="8" ></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Upper case</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lower case</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopyClick}>Copy text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove extra space</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear text</button>

            </div>
            <div className='container my-3' style={{color: props.mode === 'dark'? 'white':'black'}}>
                <h2>Your text summery</h2>
                <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minuts to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Text area is Empty'}</p>
            </div>
        </>
    )
}