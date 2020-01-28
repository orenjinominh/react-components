
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };
  }

  render() {

    var style = {
      fontWeight: this.state.selected ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)} onMouseOut={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }

  onListItemClick () {
    this.setState({
      selected: !this.state.selected
    });
  };

}

var GroceryList = (props) => (
  <ul>
    {props.items.map((item) =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Bacon', 'Bread', 'Beer']}/>
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));

/*
Create a reusable GroceryListItem component that dynamically renders a given grocery item
 Refactor GroceryList to dynamically render an array of groceryItems, utilizing your new GroceryListItem component

*/