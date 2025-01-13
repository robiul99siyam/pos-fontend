import image from "../assets/images.jpg";

export default function CategoryCard({ handleClick }) {
  return (
    <div className="flex justify-start items-start mt-2 gap-5 overflow-auto">
      <div
        onClick={() => handleClick("Strubary")}
        className="w-auto p-4 border border-transparent hover:shadow-lg rounded-md hover:border-custom-brown transition duration-300"
      >
        <img src={image} className="w-12 mx-auto" alt="Category" />
        <p className="text-sm text-gray-500 text-center">Strubary</p>
      </div>

      <div
        onClick={() => handleClick("Strubary 1")}
        className="w-auto p-4 border border-transparent hover:shadow-lg rounded-md hover:border-custom-brown transition duration-300"
      >
        <img src={image} className="w-12 mx-auto" alt="Category" />
        <p className="text-sm text-gray-500 text-center">Strubary 1</p>
      </div>
    </div>
  );
}
