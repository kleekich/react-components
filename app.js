// TODO

//import ReactDOM from 'react-dom';


var GroceryList = (props) => (
	<div>
		<h2>My Grocery List</h2>
		<ul>
			<li> {props.items[0]} </li>
			<li> {props.items[1]} </li>
		</ul>
	</div>

);

var GroceryItemKale = () => {
	<li>Kale</li>
}

var GroceryItemCucumber = () => {
	<li>Cucumber</li>
}

var GroceryListItem = () => {

}

ReactDOM.render(<GroceryList items={['Kale', 'Milk', 'Water']}/>, document.getElementById("app"));
//ReactDOM.render(<App />, document.getElementById("body"))