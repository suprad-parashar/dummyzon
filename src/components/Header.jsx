import { useState, useEffect } from "react";
import axios from "axios";
import DropDownMenu from "./DropDownMenu";
import Search from "./Search";

//Received Props - state, updateData
function Header(props) {
	const [categories, setCategories] = useState([]);
	
	useEffect(() => {
		async function loadCategories() {
			const response = await axios.get("https://dummyjson.com/products/categories/");
			const sortedCategories = response.data.sort();
			setCategories(sortedCategories);
		}
		loadCategories();
	}, []);

	let displayQuantity = 0;
	for (const cartProduct of Object.values(props.state.cart)) {
		displayQuantity += cartProduct.quantity;
	}

	return (
		<header className="Header">
			<div className="header-container">
				<div id="header-sub-logo-drop">
					<h1 id="logo" onClick={() => props.updateData("all")}>Dummyzon</h1>
					<DropDownMenu categories={categories} renderCategory={props.updateData}/>
				</div>
				<div id="header-sub-search-cart">
				<Search onSearch={props.updateData} />
				<div id="cart-div" onClick={() => props.updateData("view", -2)}>
					<img src="/cart-logo.svg" alt="Cart" id="cart"/>
					{displayQuantity !== 0 && <span>{displayQuantity}</span>}
				</div>
				</div>
			</div>
		</header>
	);
}

export default Header;