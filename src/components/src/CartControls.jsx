import "../styles/CartControls.css";
import { useEffect, useState } from "react";

//Received Props - state, product, modifyCart
function CartControls(props) {
	const [quantity, setQuantity] = useState(0);
	const { product } = props;

	useEffect(() => {
		setQuantity(props.state.cart[product.id] ? props.state.cart[product.id].quantity : 0);
	}, []);

	function handleClick(event) {
		const { name } = event.target;
		props.modifyCart(name, product);
		setQuantity(quantity + (name === "add" ? 1 : -1));
	}

	if (quantity === 0) {
		return <button onClick={handleClick} name="add">Add to Cart</button>;
	}
	
	return (
		<div id="controls">
			<button onClick={handleClick} name="remove">-</button>
			<span id="quantity">{quantity}</span>
			<button onClick={handleClick} name="add">+</button>
		</div>
	);
}

export default CartControls;