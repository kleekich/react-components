// TODO

//import ReactDOM from 'react-dom';
var App = () => (
	<div>
		<h2>My Grocery List</h2>
		<GroceryList items={['Kale', 'Cucumber', 'Milk']} />
	</div>
);

var GroceryList = (props) => {

	return (
		<ul>
			{props.items.map(item => 
				<GroceryListItem itemName={item} />
			)}
		</ul>
	)
	
};


class GroceryListItem extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			done: false
		}
	}

	onListItemClick(){
		this.setState({
			done: !this.state.done
		});
	}

	render() {
		var style = {
			fontWeight: this.state.done ? 'bold': 'normal'
		}
		return (
			<li onMouseEnter={this.onListItemClick.bind(this)} style={style}>{this.props.itemName}</li>
		);
	}

}

ReactDOM.render(<App />, document.getElementById("app"));
//ReactDOM.render(<App />, document.getElementById("body"))