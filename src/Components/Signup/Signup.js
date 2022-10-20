import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Signup.css';
import logo from '../../assets/images/signup.jpg';
import { FirebaseContext } from '../../store/Context';

export default function Signup() {
  const history = useHistory()
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext)


  const handlesubmit =(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          history.push("/login")
          alert("signup suscessful")

        })

      })
     
    })
    if(password.length == "" || password.length < 6 ){
      alert("please enter atleast 6 characters")

    }
   
  }


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={logo}></img>
        <form onSubmit={handlesubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
            required
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
            required
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            min={0}
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            
            
            id="lname"
            name="password"
            defaultValue="Doe"
           
            
          />
       

          
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{history.push('/login')}}>Login</a>
        <a onClick={()=>{history.push('/')}}>Home</a>
      </div>
    </div>
  );
}
