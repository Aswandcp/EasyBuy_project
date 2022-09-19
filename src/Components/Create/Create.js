import React, { Fragment,useContext, useState} from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/Context';
import {useHistory} from 'react-router-dom'

const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const history = useHistory()
  const [name, SetName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const date = new Date()
  const handleSubmit =(e)=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=> {
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        }).then(()=>{
                  alert('uploaded sucess')

        })

      })

    })
    history.push("/")


     
  }
  return (
    <Fragment>
      <Header />
      <card>
        <form   onSubmit={handleSubmit}>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              onChange={(e) => SetName(e.target.value) }
              name="Name"
              defaultValue="" 
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
              defaultValue="" 
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
            required/>
            <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
          
            <br />
            <input onChange={(e)=>{
                 setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button  className="uploadBtn">upload and Submit</button>
        </div>
        </form>

      </card>
    </Fragment>
  );
};

export default Create;