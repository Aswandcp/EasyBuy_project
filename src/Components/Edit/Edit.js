import React, { Fragment,useContext, useEffect, useState} from 'react';
import './Edit.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/Context';
import { useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Edit = ({userId,setProductId,products}) => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const history = useHistory()
  const [name, SetName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const date = new Date()

  const productData = useSelector((state)=> state.allProducts.products)
  useEffect(()=>{
    SetName(productData.name)
    setCategory(productData.category)
    setPrice(productData.price)

  },[productData])
  const handleSubmit =()=>{
    firebase.firestore().collection('products').doc(productData.id).set({
            name,
            category,
            price,
            url:productData.url,
            userId:user.uid,
            createdAt: productData.createdAt,
          }).then(()=>{
            history.push("/")
            window.location.reload()
        }).catch((error) => {
          console.error(error.message);
      });
    

  }
  const editHandler =async() =>{
    
    try{

      const docSnap = await products.getProduct(userId);
      SetName(docSnap.data().name);
      setCategory(docSnap.data().category);
      setPrice(docSnap.data().price);
    }catch(err){
      
    }

  }

  useEffect(()=>{
    if(userId!== undefined && userId!== ""){
    editHandler();
    }
  },[userId])
  return (
    <Fragment>
      <Header />
      <card>
        <form>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              onChange={(e) => SetName(e.target.value)}
              name="Name"
              value={name}
              required
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              value={category}
              required
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input" 
            type="number"
            id="fname" 
            onChange={(e) => setPrice(e.target.value)}
            name="Price"
            value={price} 
            required/>
            <br />
          <br />
          
            <button onClick={handleSubmit} className="uploadBtn">Edit and Submit</button>
        </div>
        </form>
      </card>
    </Fragment>
  );
};

export default Edit;