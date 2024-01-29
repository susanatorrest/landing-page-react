
import React from "react";
import { NavBar } from "./component/navbar.jsx";
import { Jumbotron } from "./component/jumbotron.jsx";
import { Cards } from "./component/cards.jsx";
import { Cards2 } from "./component/cards2.jsx";
import { Footer } from "./component/footer.jsx";

const App = () => {
	let cards = [
		{
			name: "Card title",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
			imageURL:
				"https://wallpapercave.com/wp/wp2555019.jpg",
			buttonLabel: "Find out more!",
			buttonURL: ""
		},
		{
			name: "Card title",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
			imageURL:
				"https://nhacxua.vn/wp-content/uploads/2020/11/ha-trang2.jpg",
			buttonLabel: "Find out more!",
			buttonURL: ""
		},
		{
			name: "Card title",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			imageURL:
				"https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			buttonLabel: "Find out more!",
			buttonURL: ""
		},
		{
			name: "Card title",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
			imageURL:
				"https://media.istockphoto.com/id/943365750/es/foto/arte-l%C3%ADquido-abstracto-colores-de-fondo-papel-pintado-textura-mezcla-de-pinturas-arte-moderno.jpg?s=612x612&w=0&k=20&c=OJMPZqE0AGhI92mmaZNfTmlXlQjC_lcVEaubJWXdF6s=",
			buttonLabel: "Find out more!",
			buttonURL: ""
		}
	];

	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="row mt-3 mb-3">
					{cards.map((item, i) => {
						return (
							<Cards2
								key={i}
								name={item.name}
								description={item.description}
								imageUrl={item.imageURL}
								buttonUrl={item.buttonURL}
								buttonLabel={item.buttonLabel}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default App;

