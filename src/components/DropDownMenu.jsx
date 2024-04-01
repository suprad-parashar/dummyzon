import { Dropdown, DropdownButton } from "react-bootstrap";

//Received Props - categories, renderCategory
function DropDownMenu(props) {

	return (
		<DropdownButton id="dropdown-basic-button" title="Categories">
			<Dropdown.Item key={"all"} onClick={() => props.renderCategory("all")}>All Categories</Dropdown.Item>
			<div className="dropdown-grid">
				{props.categories.map(category => {
					const words = category.split("-");
					const capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
					const formatted = capitalized.join(" ");
					return <Dropdown.Item key={category} onClick={() => props.renderCategory("category", category)}>{formatted}</Dropdown.Item>
				})}
			</div>
		</DropdownButton>
	);
}

export default DropDownMenu;