import React, { useState } from "react";
import { Form } from "../../index";

function Search({ placeholder = "", onSearch }) {
	const [searchQuery, setSearchQuery] = useState("");

	const changeHandler = (e) => {
		setSearchQuery(e.target.value);
	};

	const submitHandler = () => {
		if (setSearchQuery.length === 0) return;
		onSearch(searchQuery);
		setSearchQuery("");
	};

	return (
		<Form onSubmit={onSearch}>
			<Form.Group>
				<Form.Input
					placeholder={placeholder}
					type="text"
					mode="regular"
					value={searchQuery}
					onChange={changeHandler}
				/>
			</Form.Group>
		</Form>
	);
}

export default Search;
