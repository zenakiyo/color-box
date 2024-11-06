import PropTypes from 'prop-types'
function ShopingListItem({name, quantity, completed}) {
    const styles = {color: completed ? "grey" : "red", textDecoration: completed ? "line-through" : "none"}
    return(
        <li style={styles} >
            {name}-{quantity}
        </li>
    )
}
ShopingListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    completed: PropTypes.bool,
}                                                                                                

export default ShopingListItem