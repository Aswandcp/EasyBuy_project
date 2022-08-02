import React,{useContext} from 'react';

import './Header.css';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useHistory } from "react-router-dom";
import { AuthContext, FirebaseContext } from '../../store/Context';



function Header() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
        </div>
        <div className="loginPage">
          <span onClick={()=>{history.push('/signup')}}>
            {user ? `welcome ${user.displayName}` : 'Login'}
            </span>
          <hr />
          
        </div>
        { user && <span onClick={()=>{
          firebase.auth().signOut();
          history.push('/Login')
        }}>Logout</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
