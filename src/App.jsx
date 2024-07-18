import { BsX } from 'react-icons/bs'

function App() {
  return (
    <div className='app'>
      <h1 className="app-heading">my shopping list</h1>

      {/* shopping list ctn */}
      <div className="list-ctn">

        {/* list item */}
        <div className="list-item">
          <div>
            {/* insert delete/cancel icon*/} 
            <button className='delete-icon'>
              <BsX/>
            </button>

            <span className="item-name">
              golden morn
            </span>
          </div>

          <span className="item-price">
            $20
          </span>
        </div>

        {/* list item */}
        <div className="list-item">
          <div>
            {/* insert delete/cancel icon*/} 
            <button className='delete-icon'>
              <BsX/>
            </button>

            <span className="item-name">
              oreos
            </span>
          </div>

          <span className="item-price">
            $200
          </span>
        </div>

        {/* list item */}
        <div className="list-item">
          <div>
            {/* insert delete/cancel icon*/} 
            <button className='delete-icon'>
              <BsX/>
            </button>

            <span className="item-name">
              iPhone XR
            </span>
          </div>

          <span className="item-price">
            $500
          </span>
        </div>
      </div>
      
      {/* add item button */}
      <button className="add-item-btn">
        Add Item
      </button>
    </div>
  )
}

export default App
