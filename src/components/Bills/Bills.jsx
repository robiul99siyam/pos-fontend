import { FaShopify } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function Bills({ produtData, setProductData, qty, setQty }) {
  const handleCancel = (id) => {
    alert(id);
    setProductData((prev) => prev.filter((pro) => pro.id !== id));
  };

  const handleIncress = (id) => {
    setQty((prevQty) => ({
      ...prevQty,
      [id]: (prevQty[id] || 0) + 1,
    }));
  };
  const handleDecrease = (id) => {
    setQty((prevQty) => ({
      ...prevQty,
      [id]: Math.max((prevQty[id] || 0) - 1, 0),
    }));
  };

  const handlePrice = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="max-h-[350px] rounded-lg overflow-y-auto ">
      {produtData && produtData.length > 0 ? (
        produtData.map((product) => (
          <div
            key={product.id}
            className="w-auto shadow-sm rounded-md  shadow-gray-500 p-2 m-2 grid grid-cols-12"
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
              <p className="font-bold">{product?.name?.slice(0, 15)}...</p>
              <p>{product?.category?.name}</p>
            </div>

            {/* Pricing and Quantity Section */}
            <div className="flex flex-col pl-2  ml-6 mb-2 col-span-4">
              <p className="font-bold">
                Price:{product.selling_price * qty[product.id]}
              </p>

              <div className="flex items-center gap-2 text-gray-900  ">
                <button
                  onClick={() => handleIncress(product.id)}
                  className="px-[6px] rounded-md text-white bg-lwsGreen"
                >
                  +
                </button>
                <span className="text-white text-[16px] font-bold">
                  {qty[product.id]}
                </span>
                <button
                  onClick={() => handleDecrease(product.id)}
                  className="px-[8px] rounded-md text-white bg-rose-700"
                >
                  -
                </button>
                <RiDeleteBin6Line
                  onClick={() => handleCancel(product?.id)}
                  className="text-xl text-gray-50"
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="p-4 text-center text-gray-500 flex flex-col gap-10 mt-10 justify-center  items-center">
            <FaShopify className="text-9xl text-lwsGreen" />
            No products added yet.
          </div>
        </>
      )}
    </div>
  );
}
