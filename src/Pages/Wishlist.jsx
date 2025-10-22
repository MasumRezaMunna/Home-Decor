import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const [sortOrder, setSortOrder] = useState('none')

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) setWishlist(savedList);
  }, []);
  return (
    <div className="space-y-6">
      <div>
        <h1>Wishlist page: {wishlist.length}</h1>
      </div>
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold">
          Wishlist{" "}
          <span className="text-sm text-gray-500">
            ({wishlist.length}) Products Found.
          </span>
        </h1>
        

           <label className="form-control w-full max-w-xs">
             <select className="select select-bordered bg-black text-white" 
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}
            >
                <option value="none">Sort by Price</option>
                <option value="price-asc">Low-&gt;High</option>
                <option value="price-desc">HIgh-&gt;Low</option>
            </select>
           </label>
        
      </div>
      <div className="space-y-3">
         {wishlist.map(p => <div className="card card-side bg-base-100 shadow-sm">
  <div className="flex border rounded-xl justify-between w-full">
    <figure>
    <img
      src={p.image}
      alt={p.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{p.name}</h2>
    <p className="text-base-content/70">{p.category}</p>
    </div>
    <div className="pr-4 flex items-center gap-3">
        <div className="font-semibold flex gap-5 items-center">
            <p>${p.price}</p>
      <button className="btn btn-outline">Remove</button>
        </div>
    </div>
  </div>
  
</div>)}
      </div>
    </div>
  );
};

export default Wishlist;
