import { MdCancel } from "react-icons/md";
export default function Bills({ produtData, setProductData }) {
  const handleCancel = (id) => {
    alert(id);
    setProductData((prev) => prev.filter((pro) => pro.id !== id));
  };

  const total = produtData.reduce((acc, item) => acc + item.selling_price, 0);

  return (
    <div className="max-h-[350px] rounded-lg overflow-y-auto ">
      {produtData && produtData.length > 0 ? (
        produtData.map((product) => (
          <div
            key={product.id}
            className="w-auto shadow-sm rounded-md  border p-2 m-1 grid grid-cols-12"
          >
            {/* Image Section */}
            <img
              src={
                product.image
                  ? `${import.meta.env.VITE_SERVER_BASE_URL}/${product.image}`
                  : "https://via.placeholder.com/150"
              }
              className="w-12 h-12 rounded-full col-span-2"
              alt=""
            />

            {/* Details Section */}
            <div className="flex flex-col pl-2 col-span-5">
              <p className="text-gray-600 font-bold">
                {product?.name?.slice(0, 20)}
              </p>
              <p className="text-gray-400">{product?.category?.name}</p>
            </div>

            {/* Pricing and Quantity Section */}
            <div className="flex flex-col pl-2  ml-6 col-span-4">
              <p className="text-gray-600 font-bold">Price: {total}</p>
              <div className="flex items-center gap-2 text-gray-900  ">
                <button className="bg-gray-400 text-white px-2 py-1 rounded-sm">
                  -
                </button>
                <span>10</span>
                <button className=" bg-primary text-white px-2 py-1 rounded-sm">
                  +
                </button>

                <MdCancel
                  onClick={() => handleCancel(product?.id)}
                  className="text-xl"
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="p-4 text-center text-gray-500">
            No products added yet.
          </div>
        </>
      )}
    </div>
  );
}
