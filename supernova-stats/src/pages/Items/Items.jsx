import { useState,useEffect } from "react"
import './Items.css'
import ItemModal from "../../components/ItemModal"
import ItemCard from "../../components/ItemCard/ItemCard"

    function Items(){
        const [ isModalOpen, setModalOpen] = useState(false)
        const [ items, setItems] = useState([])
        const [ selectedItem, setSelectedItem] = useState(null)


            function onClose(){
                setModalOpen(false)
            }

            function clickItem(item){
                setSelectedItem(item)
                setModalOpen(true)
            }

        useEffect(() => {

           async function getItemData(){ 

                try{
                    const response = await fetch("https://api.opendota.com/api/constants/items")

                    if(!response.ok){
                        throw new Error("Something gone wrong")
                    }

                    const data = await response.json()
                    setItems(Object.values(data))
                  
                  

                }catch(err){
                    alert("There`s an error", err.message)
                }
            }

    getItemData()
        }, [])
        
        return(
                <>
                    <h2 className="items_h">Items</h2>

            <div className="items-grid">
                    {items.map(item => (
                <ItemCard key = {item.id} item = {item} clickItem = {clickItem}/>
                    ))}
     </div>
                    {selectedItem && isModalOpen && (
                        <ItemModal item = {selectedItem} onClose = {onClose}/>
                    )}

                </>
        ) 
        
        
    }

    export default Items