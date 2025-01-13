import image from "../assets/images.jpg";

export default function Products() {
  const products = [
    { id: 1, name: "Strawberry", image: image, price: "$5.99" },
    { id: 2, name: "Mango", image: image, price: "$7.49" },
    { id: 3, name: "Apple", image: image, price: "$4.99" },
    { id: 4, name: "Banana", image: image, price: "$3.49" },
  ];

  return (
    <div className="flex flex-wrap justify-start items-start mt-4 gap-6 ">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleClick("Strubary")}
          className="w-[200px] border p-5 h-auto "
        >
          <img src={image} className="w-[100px] mx-auto" alt="Category" />
          <p className="text-sm font-semibold text-start">{product.name}</p>
          <p className="text-sm  text-start">{product.price}</p>
        </div>
      ))}
    </div>
  );
}
