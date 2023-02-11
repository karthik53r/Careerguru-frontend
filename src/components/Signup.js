import React, { useState } from "react";
import './Tag.css'
function TagsInput() {
  const [tags, setTags] = useState([])

  function handleKeyDown(e) {
    if (e.key !== 'Enter') return
    const value = e.target.value
    if (!value.trim()) return
    setTags([...tags, value])
    e.target.value = ''
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index))
  }
  return (
    <div className="tags-input-container">
      {tags.map((tag, index) => (
        <div className="tag-item" key={index}>
          <span className="text">{tag}</span>
          <span className="close" onClick={() => removeTag(index)}>&times;</span>
        </div>
      ))}
      <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Add Your Skills Here!" />
    </div>
  )
}
const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    
  });
  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    setInput({
      fullname: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="sbody">
      <form onSubmit={submitHandler}>
        <h1>Signup Form</h1>
        <div >
          <label>Fullname</label>
          <input
            type="text"
            name="fullname"
            value={input.fullname}
            onChange={inputHandler}
          />
        </div>
        <div >
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={inputHandler}
          />
        </div>
        <label>Skills</label>
        <TagsInput/>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;