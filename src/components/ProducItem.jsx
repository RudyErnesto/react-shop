import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addCar from '@icons/bt_add_to_cart.svg';
const ProducItem = () => {
	const [cart, setCart] = useState([]);
	const handleCart = () => {
		setCart([]);
	}
    return (
        <div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick = {handleCart} >
					<img src={addCar} alt="" />
				</figure>
			</div>
		</div>
    );
}

export default ProducItem;