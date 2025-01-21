export default function CategoryCard({ item }) {
  const { name, image } = item;

  return (
    <div className="flex items-center gap-4 p-3 border border-purple-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
      <img
        src={
          image
            ? `${import.meta.env.VITE_SERVER_BASE_URL}/${image}`
            : "https://via.placeholder.com/150"
        }
        className="w-12 h-12 object-cover rounded-full"
        alt={name || "Category"}
      />
      <p className="text-base font-medium text-gray-700">
        {name || "Unnamed Category"}
      </p>
    </div>
  );
}
