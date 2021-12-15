import React from "react";

export default function About(props) {
  // const [mystyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [btnText, setbtnText] = useState("Enable Ligth Mode");

  // const toggleStyle = () => {
  //   if (mystyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setbtnText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtnText("Enable Light Mode");
  //   }
  // };
  let mystyle = {
    color: props.mode,
    backgroundColor: props.mode,
    // border: "2px solid",
    // borderColor: props.mode,
  };
  return (
    <div className="container">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "dark" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              style={mystyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextUtils gives you a way to analyze your text quickly and
              effectivily. Be it word count,character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={mystyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. That it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              style={mystyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatibility</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              This word counter software works in any web browser such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count character in facebook, blog, books, excel deocument, pdf
              documents, essays, etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3"></div>
    </div>
  );
}
