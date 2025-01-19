export default function CategoryCard({ item, handleClick }) {
  const { name, image } = item;

  return (
    <div
      onClick={() => handleClick(item.id)}
      className=" p-2 border border-transparent rounded-md transition duration-300 hover:shadow-lg hover:border-blue-950"
    >
      <img
        src={
          image
            ? `${import.meta.env.VITE_SERVER_BASE_URL}/${image}`
            : "https://via.placeholder.com/150"
        }
        className="w-14 mx-auto"
        alt="Category"
      />
      <p className="text-sm text-gray-500 text-center">{name}</p>
    </div>
  );
}
