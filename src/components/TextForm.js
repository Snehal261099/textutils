import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpCLick = () => {
    // ("UpperCase is Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("Converted to UpperCase", "success");
  };
  const handleLoCLick = () => {
    // ("UpperCase is Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("Converted to LowerCase", "success");
  };
  const handleCopy = () => {

    navigator.clipboard.writeText(text);
    props.alert("Copied to Clipboard ", "success");
  };

  const handleExcessSpaces = () => {
    var newtext = text.split(/[  ]+/);
    setText(newtext.join(" "));
    props.alert("Extra Spaces Removed", "success");
  };

  const handleredundancy = () => {
    // ("UpperCase is Clicked");
    let newText = new Set(text.split(" "));
    setText(Array.from(newText).join(" "));
    props.alert("Redundancy Removed", "success");
  };
  const clearText = () => {
    // ("UpperCase is Clicked");
    let newText = "";
    setText(newText);
    props.alert("Text Cleared", "success");
  };
  const handleOnChange = (event) => {
    // ("OnChange ");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className={`container text-${props.mode==="dark" ? "white" : "black"}`}>
        <h1
          className={`my-2  text-{{ props.mode === "dark" ? "white" : "black"}}`}
        >
          {props.heading}
        </h1>
        <div className="mb-2 ">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn btn-light mx-2 my-1`}
          onClick={handleUpCLick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-light  mx-2 my-1`}
          onClick={handleLoCLick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-light mx-2 my-1`}
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-light mx-2 my-1`}
          onClick={handleredundancy}
        >
          Handle Redundancy
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-light mx-2 my-1`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-light mx-2 my-1`}
          onClick={handleExcessSpaces}
        >
          Handle Excess Spaces
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <h2>Your text summary</h2>
        <p>
          {/* {text.charAt(0) === "" ? 0 : text.trim().split(" ").length} words and{" "} */}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          : words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          mins
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
