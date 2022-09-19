import React,{useContext} from 'react';
import './Header.css';
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
        <div className="loginPage" style={{paddingRight:"25px",fontWeight: 'bold'}}>
          <span style={{fontWeight: 'bold'}} onClick={()=>{history.push('/signup')}}>
            {user ? `Welcome ${user.displayName}` : 'Login' }
            </span>
          <hr />
          
        </div>
        { user && <span  style={{fontWeight: 'bold'}} onClick={()=>{
          firebase.auth().signOut();
          history.push('/Login')
        }}>Logout</span>}
        {user?.uid && (
          <div className="sellMenu" onClick={()=>{history.push('/create')}}>
          <SellButton ></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
        )}
        
      </div>
    </div>
  );
}
export default Header;
