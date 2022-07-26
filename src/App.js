import React,{useEffect,useContext, useState}from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create  from './Pages/Create';
import View from './Pages/ViewPost';
import Edit from './Pages/edit';
import './App.css';
import {AuthContext, FirebaseContext} from './store/Context';
import Post from './store/postContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';


function App() {
  const [productId ,setProductId] = useState("");
  const getProductIdHandler =(userId) =>{
    setProductId(userId);
  };
  const {setUser} =useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  },[])
  return (
    <div>
<Post>   
      <Router>
      <Route exact path= '/'>
        <Home />
        </Route>
        <Route path= '/signup'>
        <Signup />
        </Route>
        <Route path= '/login'>
        <Login/>
        </Route>
        <Route path= '/Create'>
        <Create id={productId} setProductId={setProductId}/>
        </Route>
        <Route path= '/view:id'>
        <View/>
        </Route>
        <Route path= '/Edit'>
        <Edit getProductId={getProductIdHandler}/>
        </Route>
      </Router>
</Post>      
    </div>
  );
}

export default App;
