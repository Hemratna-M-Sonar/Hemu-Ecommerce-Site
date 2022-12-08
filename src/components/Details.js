import React, {useState} from 'react';
import { useParams, useLocation} from 'react-router-dom';

const Details = () => {
    let location = useLocation();
    console.log(location);
    const [count, setcount] = useState(1);
    const params = useParams();
    const increase = () => {
        setcount(count+1);
    }
    const decrease = () => {
        if(count>0){
            setcount(count-1);
        }
        else{
            setcount(0);
        }
    }
    return (
        <>
            <div className="container detail-page">
                <div className="detail-box">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <img src={location.image.image} alt="laptop" /> 
                        </div>
                        <div className="col-12 col-lg-8 detail-info">
                            <h1>{location.title.title}</h1>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquam tenetur asperiores, unde obcaecati mollitia!</h3>
                            <h2>{location.price.price}</h2>
                            <div className="count">
                                <span className="minus" onClick={decrease}>-</span>
                                <p className="quantity">{count}</p>
                                <span className="plus" onClick={increase}>+</span>
                            </div>
                            <a href="#">Buy Now</a>
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Details;
