// child components import
import ListItem from './ListItem';

function App() {
  

  return (
    <div className='app'>
      <h1 className="app-heading">my shopping list</h1>

      {/* shopping list ctn */}
      <div className="list-ctn">

        {/* list item */}
        <ListItem name='golden morn' price={200} handleDelete={()=>{}}/>

        {/* list item */}
        <ListItem name='coffee pill' price={5} handleDelete={()=>{}}/>

        {/* list item */}
        <ListItem name='iPhone XR' price={400} handleDelete={()=>{}}/>
      </div>
      
      {/* add item button */}
      <button className="add-item-btn">
        Add Item
      </button>
    </div>
  )
}

export default App
