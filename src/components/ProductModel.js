const ProductModal = ({ product, onClose }) => {
    if (!product) return null;
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg max-w-lg w-full">
          <button onClick={onClose} className="text-red-500 mb-4">Close</button>
          <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">{product.title}</h2>
          <p className="text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    );
  };
  
  export default ProductModal;