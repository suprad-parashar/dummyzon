import { useState } from "react";

//Received Props - onSearch
function Search(props) {
	const [search, setSearch] = useState("");

	function handleChange(event) {
		const newValue = event.target.value;
		setSearch(newValue);
	}

	function handleSubmit() {
		props.onSearch("search", search);
		setSearch("");
	}

	function handleEnter(event) {
		if (event.key === "Enter") {
			handleSubmit();
		}
	}

	return (
		<div className="search-bar">
			<input type="text" placeholder="Find a product..." value={search} onChange={handleChange} onKeyDown={handleEnter}/>
			<button onClick={handleSubmit}>Search</button>
		</div>
	);
}

export default Search;