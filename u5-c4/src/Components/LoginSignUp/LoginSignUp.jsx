import axios from "axios";
import { useState } from "react";

export const LoginSignUp = () => {
  const [user, setUser] = useState({
    "name": "",
    "password": "",
    "location": "",
    "interests": [],
    "image": ""
  })
  const [loginuser, setLoginUser] = useState({
    "name": "",
    "password": "",
    
  })
  function handleChange(e) {
    const { id, value, checked } = e.target
    //console.log(id,value ,checked)
    if (checked) {
      setUser({...user,"interests":[...user.interests,id]})
    }
    else {
      setUser({ ...user, [id]: value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
   // console.log(user)
    axios.post("http://localhost:8080/users", user).then((res) => {
      alert('your regestration successfull');
    }); 
  }
  function handleChange2(e) {
    const { id, value } = e.target
    setLoginUser({ ...loginuser, [id]: value });
  }
  function handleSubmit2(e) {
    e.preventDefault();
    
  }
  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"  id="name"
          onChange={handleChange}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password" id="password"
          onChange={handleChange}
          required
        />
        <br />
        <label>Location </label>
        <select  className="location"  id="location" onChange={handleChange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology" id="technology"
          onChange={handleChange}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" id="food" onChange={handleChange} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" id="movies"  onChange={handleChange} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" id="culture" onChange={handleChange} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" id="art" onChange={handleChange} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" id="drama"  onChange={handleChange} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image" id="image"
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={handleSubmit2}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name" id="name"
          onChange={handleChange2}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"  id="password"
          onChange={handleChange2}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};