// TODO

import ReactDOM from 'react-dom';

var App = () => (
	<div id="app">Some cliche salutation</div>
);

var GroceryList = () => (
	<ul>
		<GroceryItemKale />
		<GroceryItemCucumber />
	</ul>

);

var GroceryItemKale = () => {
	<li>Kale</li>
}

var GroceryItemCucumber = () => {
	<li>Cucumber</li>
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));