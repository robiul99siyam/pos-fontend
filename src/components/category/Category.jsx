import CategoryCard from "./CategoryCard";

export default function Category({ category, handleClick, selectedCategory }) {
  const selectedCategoryName = category.find(
    (item) => item.id === selectedCategory
  );
  return (
    <>
      <h1 className="text-xl font-bold"> Choose Category</h1>
      <div className="w-full flex justify-start items-start  gap-5 overflow-auto">
        {category.map((item) => (
          <CategoryCard handleClick={handleClick} item={item} key={item.id} />
        ))}
      </div>
      {selectedCategoryName ? (
        <h2 className="mt-4 text-lg font-semibold">
          Selected Category: {selectedCategoryName.name}
        </h2>
      ) : (
        <h2 className="mt-4 text-lg font-semibold">Selected Category: All</h2>
      )}
    </>
  );
}
