

    function ItemCard({item, clickItem}){
            return (
                <>
                <div onClick = {() => clickItem(item)}>
                <img className = "item_img" alt = {`Image of ${item.dname}`}  src={`https://cdn.cloudflare.steamstatic.com${item.img}`} />
                <h4>{item.dname}</h4>
                </div>
                </>
            )
        }

        export default ItemCard