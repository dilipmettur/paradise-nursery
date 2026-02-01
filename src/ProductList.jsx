import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
// If these files don't exist, comment them out to prevent "Module not found" errors
// import './ProductList.css'; 

function ProductList({ onCartClick }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);
    
    // Total quantity for the navbar icon (7 points)
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    // Track added items to disable buttons (9 points)
    const addedToCart = cart.reduce((acc, item) => {
        acc[item.name] = true;
        return acc;
    }, {});

    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: 15, description: "Produces oxygen at night." },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: 12, description: "Filters formaldehyde and xylene." },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2014/12/10/11/18/peace-lily-562873_1280.jpg", cost: 18, description: "Removes mold spores from the air." },
                { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", cost: 20, description: "Adds humidity to the indoor air." },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-vera-3283030_1280.jpg", cost: 10, description: "Purifies air and has medicinal uses." },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", cost: 25, description: "Large leaves absorb toxins." }
            ]
        },
        {
            category: "Aromatic",
            plants: [
                { name: "Lavender", image: "https://cdn.pixabay.com/photo/2017/07/18/18/24/lavender-2516640_1280.jpg", cost: 15, description: "Calming scent." },
                { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", cost: 12, description: "Invigorating aroma." },
                { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/26/17/52/mint-1163013_1280.jpg", cost: 10, description: "Fresh and cooling." },
                { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2016/08/13/10/53/lemon-balm-1590518_1280.jpg", cost: 14, description: "Citrusy scent." },
                { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2017/07/17/17/34/jasmine-2513136_1280.jpg", cost: 22, description: "Sweet floral fragrance." },
                { name: "Thyme", image: "https://cdn.pixabay.com/photo/2017/06/10/16/33/thyme-2390161_1280.jpg", cost: 12, description: "Earthly scent." }
            ]
        },
        {
            category: "Medicinal",
            plants: [
                { name: "Calendula", image: "https://cdn.pixabay.com/photo/2019/07/15/11/59/calendula-4339160_1280.jpg", cost: 12, description: "Soothes skin." },
                { name: "Peppermint", image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg", cost: 10, description: "Digestive aid." },
                { name: "Chamomile", image: "https://cdn.pixabay.com/photo/2016/08/14/08/22/chamomile-1592198_1280.jpg", cost: 15, description: "Promotes sleep." },
                { name: "Echinacea", image: "https://cdn.pixabay.com/photo/2014/12/10/11/18/coneflower-562876_1280.jpg", cost: 18, description: "Immune support." },
                { name: "Sage", image: "https://cdn.pixabay.com/photo/2016/06/01/13/05/sage-1428945_1280.jpg", cost: 12, description: "Anti-inflammatory." },
                { name: "Basil", image: "https://cdn.pixabay.com/photo/2016/07/11/15/39/basil-1509956_1280.jpg", cost: 10, description: "Stress relief." }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div>
            <nav className="navbar" style={{backgroundColor: '#4CAF50', color: 'white', padding: '10px', display: 'flex', justifyContent: 'space-between'}}>
                <div><h1>Paradise Nursery</h1></div>
                <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <button onClick={() => window.location.reload()} style={{color: 'white', background: 'none', border: 'none', cursor: 'pointer'}}>Plants</button>
                    <div className="cart-icon" onClick={onCartClick} style={{ cursor: 'pointer', position: 'relative' }}>
                        <span style={{fontSize: '2rem'}}>🛒</span>
                        <span className="cart-quantity-count" style={{position: 'absolute', top: '-5px', right: '-10px', background: 'red', borderRadius: '50%', padding: '2px 6px', fontSize: '0.8rem'}}>{totalQuantity}</span>
                    </div>
                </div>
            </nav>

            <div className="product-grid" style={{padding: '20px'}}>
                {plantsArray.map((categoryObj, index) => (
                    <div key={index}>
                        <h2 style={{textAlign: 'center', margin: '30px 0'}}>{categoryObj.category}</h2>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px'}}>
                            {categoryObj.plants.map((plant, idx) => (
                                <div className="plant-card" key={idx} style={{border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '250px', textAlign: 'center'}}>
                                    <img src={plant.image} alt={plant.name} style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px'}} />
                                    <h3>{plant.name}</h3>
                                    <p><strong>${plant.cost}</strong></p>
                                    <p style={{fontSize: '0.9rem', color: '#666'}}>{plant.description}</p>
                                    <button 
                                        disabled={addedToCart[plant.name]} 
                                        onClick={() => handleAddToCart(plant)}
                                        style={{
                                            backgroundColor: addedToCart[plant.name] ? '#ccc' : '#4CAF50',
                                            color: 'white',
                                            border: 'none',
                                            padding: '10px 20px',
                                            borderRadius: '5px',
                                            cursor: addedToCart[plant.name] ? 'default' : 'pointer'
                                        }}
                                    >
                                        {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;