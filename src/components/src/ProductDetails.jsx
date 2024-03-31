import "../styles/ProductDetails.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CartControls from "./CartControls";

//Received Props - state, updateData, modifyCart
function ProductDetails(props) {
	const [product, setProduct] = useState(null);
	const [image, setImage] = useState(0);

	useEffect(() => {
		async function loadProduct() {
			const response = await axios.get(`https://dummyjson.com/products/${props.state.view}`);
			setProduct(response.data);
		}
		loadProduct();
	}, [props.state.view]);

	return (
		<div id="ProductDetails">
			{!product && <h1>Loading...</h1>}
			<button id="back-button" onClick={() => props.updateData("view", -1)}>Back</button>
			{product && <div id="details-pane">
				<div id="image-pane">
					{product.images.map((image, index) => {
						return <img key={index} src={image} alt={product.title + " Image " + index} onClick={() => setImage(index)}/>
					})}
				</div>
				<img src={product.images[image]} alt={product.title + " Image " + image} id="main-image"/>
				<div id="info-pane">
					<h2 id="title">{product.title}</h2>
					<p id="brand">Brand: {product.brand}</p>
					<p id="rating">Rated {product.rating} ★ on 5</p>
					<p id="description">{product.description}</p>
					<div id="price-div">
						<p id="old-price">${Math.round((product.price * 100) / (100 - product.discountPercentage))}</p>
						<div id="pricing">
							<p id="price">${product.price}</p>
							<p id="discount">({product.discountPercentage}% off)</p>
						</div>
					</div>
					<p id="stock">{product.stock} left in stock</p>
					<CartControls product={product} modifyCart={props.modifyCart} state={props.state}/>
				</div>
			</div>}
		</div>
	)

}

export default ProductDetails;