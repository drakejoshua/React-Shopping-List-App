// child components import
import ListItem from './ListItem';

// useLocalStorage custom hook import
import useLocalStorage from './useLocalStorage';

function App() {
  // create stateful localStorage listItems data
  const [listItems, setListItems] = useLocalStorage( "react-shopping-list", [] );

  // addItem()
  // used to add new items to the shopping list
  function addItem() {
    // prompt user to enter the new item name
    var itemName = prompt("Enter an item:");

    // check if new item name is valid else exit the 
    // function
    if ( itemName == "" ) {
      alert("Enter an item to add it to the list");
      return;
    }

    // prompt user to enter new item price
    var itemPrice = prompt("Enter an item's price:");
    
    // check if new item price is a valid number else exit the 
    // function
    if ( itemPrice == "" || Number.isNaN( itemPrice ) ) {
      alert("Enter a valid item price to add it to the list");
      return;
    }

    // generate new item ID based on listItems length
    var itemID = listItems.length + 1;

    // update listItems with newly created item
    setListItems( ( newListItems ) => {
      newListItems.push(
        {
          id: itemID,
          name: itemName,
          price: Number( itemPrice ) 
        }
      )

      return [...newListItems]
    } );
  }

  // deleteItem()
  // used to delete an item from the shopping list.
  // accepts an itemID ( to delete ) as an argument
  function deleteItem( id ) {
    // remove item with the specified id from listItems
    var newListItems = listItems.filter( function( item ) {
      return item.id != id
    })

    // update listItems with new list
    setListItems( newListItems );
  }

  return (
    <div className='app'>
      <h1 className="app-heading">my shopping list</h1>

      {/* shopping list ctn */}
      <div className="list-ctn">

        {/* list items */}
        {
          ( listItems.length != 0 ) && listItems.map( function( item ) {
            return <ListItem name={ item.name } price={ item.price } 
                      handleDelete={() => { deleteItem( item.id ) }} key={item.id}/>
          })
        }
        
        {/* conditionally render a message if there are no items in listItems */}
        {
          ( listItems.length == 0 ) && 
            <h2 style={ { color: 'lightgray', textAlign: 'center' } }>
              Add an item to get started
            </h2>
        }
      </div>
      
      {/* add item button */}
      <button className="add-item-btn" onClick={addItem}>
        Add Item
      </button>
    </div>
  )
}

export default App
