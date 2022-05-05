import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProducItem from '@components/ProducItem';
import '../styles/ProductList.scss';



const API ='https://api.escuelajs.co/api/v1/products?limit=5&offset=1';

const ProductList = () => {
	const [products, setProducts] =  useState([]);

	useEffect(()=>{
		async function fetchData(){
			const response = await axios(API);
			setProducts(response.data);
		}		
		fetchData()
	}, [])
    return (
        <section className="main-container">
			<div className="ProductList">
				{products.map(product =>(
					<ProducItem />
				))}
			</div>
		</section>
    );
}

export default ProductList;