import { useState } from "react";
import Sidebar from "../components/sidebar";
import './grocery.css';
import AddItem from "../components/addItem";

function GroceryBook(){

    const [selectedCategory, setSelectedCategory] = useState('Pantry Essentials');
    const [search, setSearch] = useState('');
    
    const categories = ['Pantry Essentials', 'Fruits & Vegetables', 'Dairy, Bread & Eggs', 'Meats'];
    const [savedItems, setSavedItems] = useState([]); 

    const handleSaveItem = (itemData) => {
        setSavedItems(prevItems => [...prevItems, itemData]);
    };


    const searchItem = () => {
        console.log("search invoked")
        const filteredItems = savedItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        console.log(filteredItems);
        if (filteredItems.length > 0) {
            return <div>{filteredItems.map(item => <div key={item.name}>{item}</div>)}
            {console.log("searched")}</div>;
        } else {
            return <div>Item not found.
                {console.log("Not Found")}
            </div>;
        }
    };

    // const editItem = (index)=>{
        
    // }

    const deleteItem = (index) => {
        setSavedItems((prevItems) => prevItems.filter((_, i) => i !== index)); 
      console.log(savedItems);
    } 

    // Render saved items
    const renderContent = (category) => {
        if(['Pantry Essentials', 'Dairy, Bread & Eggs', 'Fruits & Vegetables', 'Meats'].includes(category)){
            return  <div className="cat">Add your {category} here <AddItem category={category} onSave={handleSaveItem} />
                     <div>
                       <h3>Saved Items:</h3>
                        {savedItems
                          .filter(item => item.category === selectedCategory) 
                          .map((item, index) => (
                         <div key={index} className="savedItem">
                          {index+1}.  {item.name} - {item.quantity} {item.weight} (Purchased on: {item.purchaseDate}, Expiry on: {item.expiryDate}) 
                         <button className="editButton" onClick={() => deleteItem(index)}>Edit item</button> 
                         <button className="deleteButton" onClick={() => deleteItem(index)}>Delete item</button> 
                       </div>
             ))}
                  </div>
                        </div>;
        }
    };

    return(
        <>
        <Sidebar/>
        <section>
            <div className="container">
                <div className="header">
                    <h1>GroceryBook</h1>
                    <input type="search" value={search} placeholder="&#x1F50D; search items from your grocery list " id="search" onChange={(e) => setSearch(e.target.value)}/>
                    <button className="search" onClick={()=>{searchItem()}}>Search</button>

                </div>
                <br/>
                <br/>


                <div className="categories">
            {categories.map((category) => (
                <div
                    key={category}
                    className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </div>
            ))}
        </div>

        {renderContent(selectedCategory)}
                   
            </div> 
        </section>
        </>
    );
}

export default GroceryBook;