import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaHeart, FaTrashAlt } from 'react-icons/fa';
import "react-toastify/dist/ReactToastify.css";
import '../index.css'


export default function Cart(){

  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [disabledHearts, setDisabledHearts] = useState([]);


  useEffect(() => {
    fetch("/data/items.json") 
      .then((res) => res.json()) 
      .then((data) => setItems(data)) 
  });




  const addToFavorites = (item) => {

    setFavorites([...favorites, item]);
    setDisabledHearts([...disabledHearts, item.id]);
    toast.success(`${item.title} added to favorites !`);

  };


  const removeFromFavorites = (id) => {

    const updated = favorites.filter((item) => item.id !== id);
    
    setFavorites(updated);
    setDisabledHearts(disabledHearts.filter((itemId) => itemId !== id));
    toast.error("Item removed from favorites !"); 
    
  };

 
  const totalAmount = favorites.reduce((sum, item) => sum + item.currentBidPrice, 0);




  return (


    <div id="cart-section" className="sora bg-gray-100 px-[7vw] pb-[20vh] pt-[20vh]">
      <ToastContainer position="top-right" autoClose={1500} /> 



      <div className="pb-10">
        <h2 className="text-3xl font-bold text-[#0E2954]">Active Auctions</h2>
        <p className=" text-gray-600 py-2">Discover and bid on extraordinary items</p>
      </div>



    

      <div className="flex gap-8">

  

        <div className="w-7/8">

          <div className="bg-white shadow-2xl rounded-2xl">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-lg text-[#0E2954] rounded-2xl">
                  <th className="px-10 py-4">Item</th>
                  <th className="px-10 py-4">Current Bid</th>
                  <th className="px-10 py-4">Time Left</th>
                  <th className="px-10 py-4">Bid Now</th>
                </tr>
              </thead>



              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-t ">
                    <td className="px-10 py-4 text-[16px] flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 rounded object-cover"
                      />
                      <span className="font-medium">{item.title}</span>
                    </td>
                    <td className="px-10 py-4 font-semibold relative left-5">
                      ${item.currentBidPrice.toLocaleString()}
                    </td>
                    <td className="px-10 py-4 text-gray-600 relative left-2">{item.timeLeft}</td>
                    <td className="px-10 py-4 text-2xl relative left-4">


                      <button
                        onClick={() => addToFavorites(item)} 
                        disabled={disabledHearts.includes(item.id)} 
                        className={`p-2 rounded-full ${
                          disabledHearts.includes(item.id)
                            ? "cursor-not-allowed text-red-500" 
                            : "hover:bg-red-100 text-gray-600"
                        }`}
                      >
                        <FaHeart /> 
                      </button>


                    </td>
                  </tr>
                ))}
              </tbody>



            </table>
          </div>
        </div>

    
        <div className="w-full lg:w-1/3">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-2xl font-semibold text-[#0E2954] mb-4 border-b pb-2 flex items-center justify-center gap-2">
              <FaHeart /> Favorite Items
            </h3>

           
            {favorites.length === 0 ? (
              <div className="text-center py-6 border-b">
                <p className="text-black font-medium mb-1">No favorites yet</p>
                <p className="text-gray-500 text-sm">
                  Click the heart icon on any item <br /> to add it to your favorites
                </p>
              </div>

            ) : (

              <ul className="space-y-4 border-b pb-4">
                {favorites.map((item) => (
                  <li key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-600">
                          ${item.currentBidPrice} | Bids: {item.bidsCount}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromFavorites(item.id)} 
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt /> 
                    </button>
                  </li>
                ))}
              </ul>
            )}

     
            <div className="mt-4 flex justify-between items-center font-semibold">
              <span>Total bids Amount</span>
              <span>${totalAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

