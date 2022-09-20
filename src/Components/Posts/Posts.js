
import React,{useState,useEffect,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import './Post.css';
import { postContext } from '../../store/postContext';
import {useHistory} from 'react-router-dom';

function Posts() {
  const{firebase} = useContext(FirebaseContext)
  const [products,setProducts] = useState([])
  const {setPostDetails} = useContext(postContext)
  const history = useHistory()

  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allPost = snapshot.docs.map((product)=>{
        console.log(product)

        return {
          ...product.data(),
          id:product.id

        }

      })
      setProducts(allPost)
    })
  },[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Products</span>
          
        </div>
        <div className='row'>
        <div className="cards " >
      {products.map(product=>{
        return <div
        className="card"
        onClick={()=>{
          setPostDetails(product);
          history.push('/View')
        }}
        
        >
          
        <div className="favorite">
        </div>
        <div className="image">
          <img src={product.url} alt="" />
        </div>
        <div className="content">
          <p className="rate">&#x20B9; {product.price}</p>
          <span className="category">{product.category}</span>
          <p className="name">{product.name}</p>
        </div>
        <div className="date">
          <span>{product.createdAt}</span>
        </div>
      </div>

    })
          
    }
 
        </div>
        </div>
      </div>      
    </div>
  );
}

export default Posts;