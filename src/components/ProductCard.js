const ProductCard = ({ product, onClick }) => (
  <div className="border p-4 rounded-lg shadow-md cursor-pointer" onClick={() => onClick(product)}>
    <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
    <h2 className="text-lg font-semibold">{product.title}</h2>
    <p className="text-gray-700">${product.price}</p>
  </div>
);

export default ProductCard;