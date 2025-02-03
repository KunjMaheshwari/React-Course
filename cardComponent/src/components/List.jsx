import PropTypes from "prop-types";

function List(props) {

    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(itemList => <li key={itemList.id}>{itemList.name}: {itemList.calories}</li>)

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">
                {listItems}
            </ul>
        </>
    )
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(propTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

List.defaultProps = {
    category: "Category",
    items: []
}


export default List;