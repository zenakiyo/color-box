
import ShopingListItem from './ShoppingListItem'
function GeneralShopingList() {
    const data = [
        {id: "1", name: "eggs", quantity: 12, completed: false},
        {id: "2", name: "milk", quantity: 1, completed: true},
        {id: "3", name: "chicken breasts", quantity: 2, completed: false},
        {id: "4", name: "carrots", quantity: 6, completed: true},
        {id: "5", name: "onions", quantity: 6, completed: true},
    ]
    return(
        <ul>
            <li>{data[0].id}</li>
            {data.map(item => <ShopingListItem key={item.id} {...item}/>)}
        </ul>
    )
}                                                                                                  

export default GeneralShopingList