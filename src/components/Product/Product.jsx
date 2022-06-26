import React from 'react'
import DATA from '../../data'
import { NavLink } from "react-router-dom";




const Product = () => {
  const cardItem= (item)=>{
    return(
      <div className="card my-5 py-4" key={item.id} style={{width: '18rem'}}>
  <img src={item.img} className="card-img-top" alt={item.title}/>
  <div className="card-body text-center">
    <h5 className="card-title">{item.title}</h5>
      <p className="lead">${item.price}</p>
  </div>
    <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
</div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {DATA.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Product