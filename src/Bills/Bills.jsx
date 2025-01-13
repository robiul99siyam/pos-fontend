import image from "../assets/images.jpg";

export default function Bills() {
  return (
    <div className="w-auto shadow-sm rounded-md border p-2 m-1 flex justify-start gap-5 items-center">
      {/* Image Section */}
      <img src={image} className="w-14 h-14" alt="Category" />

      {/* Details Section */}
      <div className="flex flex-col pl-2">
        <p className="text-gray-600 font-bold">Name: Mango</p>
        <p className="text-gray-400">Category: Orange</p>
      </div>

      {/* Pricing and Quantity Section */}
      <div className="flex flex-col pl-2">
        <p className="text-gray-600 font-bold">Unit Price: $170</p>
        <div className="flex items-center gap-2 text-gray-900">
          <button className="bg-gray-400 text-white px-2 py-1 rounded-sm">
            -
          </button>
          <span>10</span>
          <button className="bg-custom-brown text-white px-2 py-1 rounded-sm">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
