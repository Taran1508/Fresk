import { useState } from "react";
import './addItem.css';

function AddItem({ onSave }){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [itemName, setItemName] = useState('');
    const [category, setCategory] = useState('Pantry Essentials');
    const [quantity, setQuantity] = useState('');
    const [weight, setWeight] = useState('Grams');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    

    const saveItem = () => {
        // Example of saving the data locally or performing a desired action
        const itemData = {
            name: itemName,
            quantity: quantity,
            weight: weight,
            category: category,
            purchaseDate: purchaseDate,
            expiryDate: expiryDate,
        };
        
        console.log("Item saved:", itemData);
        onSave(itemData);

        setExpiryDate();
        setItemName('');
        setQuantity('');
        setPurchaseDate();
       
    }
    return(
        <>
        <button className="button" onClick={openModal}>Add Item</button>

{isModalOpen && (
    <div className="modal-overlay">
        <div className="modal-content">
            <h2>Add New Item</h2>
            <div className="addItem">
                <label htmlFor="items">Item name</label>
                <input type="text" placeholder="Enter item name" id="items" value={itemName}
                onChange={(e) => setItemName(e.target.value)} />
                
                <label htmlFor="quantity">Quantity</label>
                <input type="number" placeholder="Enter quantity" id="quantity" value={quantity}
                onChange={(e) => setQuantity(e.target.value)}/>

                <label htmlFor="weight">Weight</label>
                <select id="weight" value={weight}
                onChange={(e) => setWeight(e.target.value)}>
                    <option>Grams</option>
                    <option>Kgs</option>
                </select>

                <label htmlFor="cate">Category</label>
                <select id="cate" value={category}
                onChange={(e) => setCategory(e.target.value)}>
                    <option>Pantry Essentials</option>
                    <option>Fruits & Vegetables</option>
                    <option>Meats</option>
                    <option>Dairy, Bread & Eggs</option>
                </select>

                <label htmlFor="purchase">Date of purchase</label>
                <input type="date" id="purchase" value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)} />

                <label htmlFor="expiry">Date of expiry</label>
                <input type="date" id="expiry" value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)} />

                <button onClick={saveItem}>Save</button>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    </div>
)}
            
        </>
    );
}

export default AddItem;