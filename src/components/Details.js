import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
            const {id,img,title,info,price,inCart,company} = value.detailProduct
            return(
                <div className="container py-4">
                  {/*title*/}
                 <div className = "row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                     <h1>{title}</h1>    
                    </div>     
                </div>
                {/*end title*/}
                {/*Product info */}
               <div className="row">
                   <div className="col-9 mx-auto col-md-6 my-3 ">
                <img src={img} className="img-fluid" alt="product"/>
                    </div>
                 {/*Product text*/}   
                    <div className="col-9 mx-auto col-md-6 my-3 text-capitalize">
                        <h2>model : {title}</h2>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                          made by : <span>{company}</span>
                        </h4>
                       <h4 className="text-blue">
                        <strong>
                            price : <span>$</span>{price}
                        </strong>
                        </h4> 
                       <h5 className="text-capitalize font-weight-bold mt-3 mb-1">
                           some info about product:
                        </h5>
                       <p className="text-muted font-weight-normal lead">{info}</p>    
                        {/*buttons*/}
                       <div>
                        <Link to="/">
                          <ButtonContainer >
                           back to products   
                           </ButtonContainer>    
                        </Link>
                        <ButtonContainer
                        cart 
                        disabled={inCart?true:false}
                        onClick={() =>{
                            value.addToCart();
                            value.openModal(id)
                        }}>
                        {inCart? 'incart' : 'add to cart'}   
                           </ButtonContainer>    
                        </div> 
                    </div>
               </div>
                </div>
            )
                }}
            </ProductConsumer>
        )
    }
}
