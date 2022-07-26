import React from 'react';

import Heart from '../../assets/Heart';
import imgP1 from '../../assets/images/products/mobilesample.jpeg'

import './Post.css';

function Posts() {
  const products = [
    { id:1,
      img:imgP1,
      rate:250000,
      productName:'YAMAHA R15V3',
      date:'Tue May 04 2021',type:'sdfd'
    },
    { id:2,
      img:imgP1,
      rate:45000,
      productName:'YAMAHA R15V3',
      date:'Wed May 14 2021',type:'sdfd'
    },
    { id:3,
      img:imgP1,
      rate:350000,
      productName:'YAMAHA R15V3',
      date:'Thu May 25 2021',type:'sdfd'
    }
  ]
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Products</span>
          <span>View more</span>
        </div>
        <div className='row'>
        <div className="cards col-sm-2" >
          {products.map((product)=>{
            return (
              <div
              className="card"
            >
              {/* <div className="favorite">
                <Heart></Heart>
              </div> */}
              <div className="image">
                <img className='card-image' src={product.img} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.rate}</p>
                <span className="kilometer">{product.type}</span>
                <p className="name"> {product.productName}</p>
              </div>
              <div className="date">
                <span>{product.date}</span>
              </div>
            </div>
            )
          })}

          
        </div>
        
        {/* <div className="cards col-sm-2" >
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          
        </div> */}
        {/* delete later */}
        </div>
        {/* <div className="cards">
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
        </div> */}
      </div>
      
      {/* <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div> */}
            {/* <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Posts;
