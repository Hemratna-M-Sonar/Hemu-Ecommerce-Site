import React, {useState} from 'react';
import {Link} from "react-router-dom";
import shoes from './API/shoesAPI';

const Shoes = () => {
    const [shoesItem, setShoesItem] = useState(shoes);
    return (
        <>
           <div className="container">
                <div className="row items-margin-left">
                {
                    shoesItem.map((ele) => {
                        const {id, image, title, description, price} = ele;
                        return(
                            <div className="item-box category col-12 col-lg-3" key={id}>
                                <Link className="product-render" to={
                                    {pathname:`/Shoes/${id}`,
                                    image: {image},
                                    title: {title},
                                    price: {price}
                                    }
                                    }>
                                <img src={image} />
                                <h2 className="item-name">{title}</h2>
                                <h3 className="price">{price}</h3>
                            </Link>
                            </div>
                        )
                    })
                }
                </div>  
            </div>  
        </>
    )
}

export default Shoes;