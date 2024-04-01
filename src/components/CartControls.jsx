import { useState } from "react";

//Received Props - state, product, modifyCart
function CartControls(props) {
	const { product } = props;
	const [quantity, setQuantity] = useState(props.state.cart[product.id] ? props.state.cart[product.id].quantity : 0);

	function handleClick(event) {
		const { name } = event.target;
		props.modifyCart(name, product);
		setQuantity(quantity + (name === "add" ? 1 : -1));
	}

	if (quantity === 0) {
		return <button onClick={handleClick} name="add" className="cart-control-button">Add to Cart</button>;
	}
	
	return (
		<div className="cart-controller">
			<button onClick={handleClick} name="remove" className="cart-control-button">-</button>
			<span className="cart-quantity">{quantity}</span>
			<button onClick={handleClick} name="add" className="cart-control-button">+</button>
		</div>
	);
}

export default CartControls;