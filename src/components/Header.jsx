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
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="cart">
						<path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						{displayQuantity !== 0 && <span>{displayQuantity}</span>}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;