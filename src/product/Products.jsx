import image_2 from "../assets/download.png";
import image from "../assets/images.jpg";
export default function Products() {
  const products = [
    { id: 1, name: "Strawberry", image: image, price: "$5.99" },
    { id: 2, name: "Mango", image: image, price: "$7.49" },
    { id: 3, name: "Apple", image: image_2, price: "$4.99" },
    { id: 4, name: "Banana", image: image_2, price: "$3.49" },
    { id: 5, name: "Banana", image: image, price: "$3.49" },
    { id: 6, name: "Banana", image: image_2, price: "$3.49" },
    { id: 7, name: "Banana", image: image, price: "$3.49" },
  ];

  const handleClick = (name) => {
    console.log(`Clicked on: ${name}`);
  };

  return (
    <div className="flex flex-wrap justify-start items-start mt-4 gap-6 bg-white p-4 shadow-md">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleClick(product.name)}
          className="w-[200px] p-5 h-auto border border-transparent hover:shadow-lg rounded-md hover:border-gray-500 transition duration-300"
        >
          <img
            src={product.image}
            className="w-auto h-[100px] mx-auto"
            alt={product.name}
          />
          <p className="text-sm font-semibold text-start">{product.name}</p>
          <p className="text-sm text-start">{product.price}</p>
          <button className="bg-custom-brown px-8 py-2 mt-1 text-white rounded-sm">
            Add Billing
          </button>
        </div>
      ))}
    </div>
  );
}
