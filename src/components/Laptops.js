import React, {useState} from 'react';
import {Link} from "react-router-dom";
import laptops from './API/LaptopAPI';

const Laptops = () => {
    const [laptopItem, setlaptopItem] = useState(laptops);
    return (
        <>
            <div className="container">
                <div className="row items-margin-left">
                {
                    laptopItem.map((ele) => {
                        const {id, image, title, description, price} = ele;
                        return(
                            <>   
                                <div className="item-box category col-12 col-lg-3" key={id}>
                                    <Link className="product-render" to={
                                        {pathname:`/Laptops/${id}`,
                                        image: {image},
                                        title: {title},
                                        price: {price}
                                        }
                                        }>
                                        <img src={image} alt="laptop" />
                                        <h2 className="item-name">{title}</h2>
                                        <h3 className="price">{price}</h3>
                                    </Link>
                                </div>
                            </>
                        )
                    })
                }
                </div>  
            </div> 
        </>
    )
}

export default Laptops;
// export {image, title, price};