import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css'; // You can create this for custom styling

function ProductList() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);
    
    // Check if a plant is already in the cart to disable the button
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
            {/* Task 6 Navbar: Links and dynamic cart count */}
            <div className="navbar">
                <a href="/">Home</a>
                <a href="#">Plants</a>
                <div className="cart-icon">
                    🛒 <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                </div>
            </div>

            <div className="product-grid">
                {plantsArray.map((categoryObj, index) => (
                    <div key={index}>
                        <h2>{categoryObj.category}</h2>
                        <div className="plant-list">
                            {categoryObj.plants.map((plant, idx) => (
                                <div className="plant-card" key={idx}>
                                    <img src={plant.image} alt={plant.name} style={{width: '200px'}} />
                                    <h3>{plant.name}</h3>
                                    <p>${plant.cost}</p>
                                    <p>{plant.description}</p>
                                    <button 
                                        disabled={addedToCart[plant.name]} 
                                        onClick={() => handleAddToCart(plant)}
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