"use client";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModel";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
    setLoading(true);
    fetch(process.env.NEXT_PUBLIC_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
  (selectedCategory === '' || product.category === selectedCategory)
  );
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex items-center gap-8">
      <input
        type="text"
        placeholder="Search products..."
        className=" p-2 border rounded w-full text-black"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       <select
          className="p-2 border rounded text-gray-700"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {[
            ...new Set(products.map(product => product.category))
          ].map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      {loading ? (
        <div className="flex justify-center absolute top-2/4 left-1/2">
        <ClipLoader color="#36d7b7" />
          </div>
      ) : (
        <>
        {filteredProducts.length === 0 ? (
          <p className="text-white text-xl mb-4">No results found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.fdprocessedid} product={product} onClick={() => setSelectedProduct(product)} />
            ))}
          </div>
        )}
      </>
      )}

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
