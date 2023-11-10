import React from "react";
import work from "../image/Browser-DOM-Virtual-DOM-copy.webp";
import "../React/React.css";

const Work = () => {
  return (
    <div class="card">
      <p class="time-text">
        <span>How ReactJS works</span>
      </p>
      <p class="day-text">
        React creates a virtual DOM in memory to update the browser’s DOM. The
        virtual DOM will try to find the most efficient way to update the
        browser’s DOM. <br />
        Unlike browser DOM elements, React elements are simple objects and are
        cheap to create. React DOM takes care of updating the DOM to match the
        React elements. The reason for this is that JavaScript is very fast and
        it’s worth keeping a DOM tree in it to speed up its processing. Although
        React was designed to be used in the browser, because of its design
        allows it to be used on the server with Node.js as well.
      </p>
      <img src={work} alt="" style={{ width: 800, height: 150 }} />
    </div>
  );
};

export default Work;
