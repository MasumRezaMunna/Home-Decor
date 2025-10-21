import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../hooks/useProducts';

const ProductDetails = () => {
    const {id} = useParams()
    const {products, loading, error} = useProducts()
    const product = products.find(p => String(p.id) === id)

    if (loading) return <p>Loading..</p>
    const { name,image, category, price} = product

    return (
         <div className="card bg-base-100 border shadow-sm">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
            Category: {category}
        </p>
        <p>
            Price: ${price}
        </p>
        <div className="card-actions justify-end">
          <button  className="btn btn-primary">Add to Wishlist</button>
        </div>
      </div>
    </div>
    );
};

export default ProductDetails;