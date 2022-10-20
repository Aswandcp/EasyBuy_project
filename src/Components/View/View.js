import React,{useEffect,useState,useContext} from 'react';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { postContext } from '../../store/postContext';
import {useHistory,useParams} from 'react-router-dom';
import './View.css';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/actions/productActions';

function View() {
  
const[userDetails,setUserDetails] = useState()
const[postDetails,setPostDetails] = useState()
const {firebase} = useContext(FirebaseContext)
const {user} = useContext(AuthContext)
const history = useHistory()
const { id } = useParams();

const dispatch = useDispatch();

useEffect(()=>{
  firebase.firestore().collection('products').get().then((snapshot)=>{
    const allPost = snapshot.docs.map((product)=>{

      return {
        ...product.data(),
        id:product.id

      }
    })
    const productDetails = allPost.find(post=>post.id==id)
    const{userId} = productDetails
  firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
    res.forEach(doc => {
      setUserDetails(doc.data())
    });
  },[])
      setPostDetails(productDetails)
    })
  

},[])

const handleDeleteItem =()=>{
  firebase.firestore().collection('products').doc(postDetails.id).delete().then(()=>{
    history.push("/")
})
}
const handleEditItem = (userData,productData) => {
  dispatch(setProducts(productData))
  
}
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails?.url}
          alt=""
          
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p style={{fontWeight: 'bold'}}>&#x20B9; {postDetails?.price} </p>
          <span style={{fontWeight: 'bold'}}>{postDetails?.name}</span>
          <p style={{fontWeight: 'bold'}}>{postDetails?.category}</p>
          <span style={{fontWeight: 'bold'}}>{postDetails?.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails" >
          <p style={{fontWeight: 'bold'}}>SELLER DETAILS</p>
          <p style={{fontWeight: 'bold'}}>NAME: {userDetails.username}</p>
          <p style={{fontWeight: 'bold'}}>MOBILE NUMBER: {userDetails.phone}</p>
        </div>}
        
     <br/>
     
     <div onClick={()=>{
          history.push('/Edit')
        }}>{postDetails?.userId === user?.uid && <button onClick={(e)=> handleEditItem(user,postDetails)}style={{backgroundColor:'green',fontWeight:'bold'}}>EDIT </button>}</div>
        <br/>
        <div>{postDetails?.userId === user?.uid && <button style={{backgroundColor:'red',fontWeight:'bold'}} onClick={handleDeleteItem}>DELETE</button>}</div>
      </div>
      
    </div>
  );
}
export default View;