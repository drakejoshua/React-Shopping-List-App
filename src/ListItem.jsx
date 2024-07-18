// import react-icons
import { BsX } from 'react-icons/bs';

import PropTypes from 'prop-types'


function ListItem( props ) {
  return (
    <div className="list-item">
        <div>
            {/* insert delete/cancel icon*/} 
            <button className='delete-icon' onClick={ props.handleDelete }>
                <BsX/>
            </button>

            <span className="item-name">
                { props.name }
            </span>
        </div>

        <span className="item-price">
            ${ props.price }
        </span>
    </div>
  )
}


// prop-types declaration for props type-checking
ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired
}


export default ListItem
