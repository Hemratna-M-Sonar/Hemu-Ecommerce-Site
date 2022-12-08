import React, {useState} from 'react';
import {Link} from "react-router-dom";
import fashion from './API/FashionAPI';

const Fashion = () => {
    const [fashionItem, setFashionItem] = useState(fashion);
    return (
        <>
           <div className="container fashion">
                <div className="row items-margin-left">
                {
                    fashionItem.map((ele) => {
                        const {id, image, title, description, price} = ele;
                        return(
                            <div className="item-box category col-12 col-lg-3" key={id}>
                                <Link className="product-render" to={
                                    {pathname:`/Fashion/${id}`,
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

export default Fashion;