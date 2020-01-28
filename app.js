
var GroceryList = (props) => {

  var onListItemClick = (event) => {
    console.log('Clicked!');
  };
  return (
    <ul>
      {props.items.map((item, index) =>
        <li key={index} onClick={onListItemClick}>
          {item}
        </li>
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