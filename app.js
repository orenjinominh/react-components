
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li onClick={this.onListItemClick}>{this.props.item}</li>
    );
  }

  onListItemClick () {
    console.log('Clicked!');
  };

}

var GroceryList = (props) => {

  return (
    <ul>
      {props.items.map((item) =>
        <GroceryListItem item={item} />
      )}
    </ul>
  );
}

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