import React from "react";

function Instructions(props) {
  return (
    <div className="instructions">
      <div className="container">
        {props.children}
        <p className="lead">
          Click on a Meme ONLY ONCE! to get points while the Memes shuffle on
          every CLICK!
        </p>
      </div>
    </div>
  );
}

export default Instructions;
