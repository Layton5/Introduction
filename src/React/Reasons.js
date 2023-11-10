import React from "react";
import "../React/React.css";

const Reasons = () => {
  return (
    <div class="card">
      <p class="time-text">
        <span>Reason to choose ReactJS</span>
      </p>
      <p class="day-text">
        ReactJS uses a declarative paradigm that allows for applications to be
        both effective and flexible. It creates simple views for each state in
        your application and efficiently updates and renders just the right
        component as your data changes. The declarative view makes your code
        more predictable and easier to debug. Each component in a React
        application is responsible for rendering a separate, reusable piece of
        HTML code. The ability to nest components within other components allows
        you to build complex applications from simple building blocks. A
        component can also keep track of its internal state, for example, a
        TabList component can hold a variable for the open tab in memory.
      </p>
    </div>
  );
};

export default Reasons;
