import React from "react";
import PropTypes from "prop-types";
import "./Todo.css";

const Todo = ({ title, description }) => {
  return (
    <div className={`Todo`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="button-wrapper">
        <button className="complete-button">Mark as complete</button>
        <button className="remove-button">Delete this todo</button>
        <button className="edit-button">Edit this todo</button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

Todo.defaultProps = {
  title: "",
  description: ""
};

export default Todo;
