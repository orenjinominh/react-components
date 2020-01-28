var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItems items={['Bacon', 'Bread', 'Beer']}/>
  </div>
);

var GroceryListItems = (props) => {
  var onListItemClick = (event) => {
    console.log('Got clicked!');
  };

  return (
    <ul>
      <li onClick={onListItemClick}>{props.items[0]}</li>
      <li>{props.items[1]}</li>
      <li>{props.items[2]}</li>
    </ul>
  );
}

ReactDOM.render(<GroceryList />, document.getElementById('app'));

/*

Create a reusable GroceryListItem component that dynamically renders a given grocery item
 Refactor GroceryList to dynamically render an array of groceryItems, utilizing your new GroceryListItem component

*/