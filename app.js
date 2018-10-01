// TODO

//import ReactDOM from 'react-dom';
var App = () => (
	<div>
		<h2>My Grocery List</h2>
		<GroceryList items={['Kale', 'Cucumber', 'Milk']} />
	</div>
);

var GroceryList = (props) => {
	var onListItemClick = (event) => {
		console.log('I got clicked'+ event);
	}

	return (
		<ul>
			<li onClick={onListItemClick}> {props.items[0]} </li>
			<li> {props.items[1]} </li>
		</ul>
	)
	
};


ReactDOM.render(<App />, document.getElementById("app"));
//ReactDOM.render(<App />, document.getElementById("body"))