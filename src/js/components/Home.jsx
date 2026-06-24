import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TodoList from "./TodoList";

//create your first component
const Home = () => {
	return (
		<main>
			<div className="container d-flex justify-content-center">
				<TodoList />
			</div>
		</main>
	);
};

export default Home;