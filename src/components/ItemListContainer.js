import ItemCount from "./ItemCount"


const ItemListContainer = ({ greetings }) => {
    return (
        <div className="itemList">{greetings}
        <ItemCount stock={10} initial={1}/></div>
    )
}

export default ItemListContainer