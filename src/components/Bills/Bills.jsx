export default function Bills({ produtData, setProductData }) {
  const handleCancel = (id) => {
    alert(id);
    setProductData((prev) => prev.filter((pro) => pro.id !== id));
  };
  return (
    <div className="max-h-[350px] rounded-lg overflow-y-auto ">
      {produtData.map((product) => (
        <div
          key={product.id}
          className="w-auto shadow-sm rounded-md  border p-2 m-1 flex justify-start gap-5 items-center"
        >
          {/* Image Section */}
          <img
            src={
              product.image
                ? `${import.meta.env.VITE_SERVER_BASE_URL}/${product.image}`
                : "https://via.placeholder.com/150"
            }
            className="w-12 h-12 rounded-full"
            alt=""
          />

          {/* Details Section */}
          <div className="flex flex-col pl-2">
            <p className="text-gray-600 font-bold">
              {product?.name?.slice(0, 20)}
            </p>
            <p className="text-gray-400">{product?.category?.name}</p>
          </div>

          {/* Pricing and Quantity Section */}
          <div className="flex flex-col pl-2">
            <p className="text-gray-600 font-bold">
              Unit Price: {product?.selling_price}
            </p>
            <div className="flex items-center gap-2 text-gray-900">
              <button className="bg-gray-400 text-white px-2 py-1 rounded-sm">
                -
              </button>
              <span>10</span>
              <button
                onClick={() => handleCancel(product?.id)}
                className=" bg-primary text-white px-2 py-1 rounded-sm"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
