import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addCar from '@icons/bt_add_to_cart.svg';
const ProducItem = ({product}) => {
	const [cart, setCart] = useState([]);
	const handleCart = () => {
		setCart([]);
	}
    return (
        <div className="ProductItem">
			<img src= {product.images[0]} alt={product.title}/>
			<div className="product-info">
				<div>
					<p>$ {product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick = {handleCart} >
					<img src={addCar} alt="" />
				</figure>
			</div>
		</div>
    );
}

export default ProducItem;