import CategoryCard from "./CategoryCard";

export default function Category({ category }) {
  return (
    <>
      <h1 className="text-xl font-bold"> Choose Category</h1>
      <div className="w-full flex justify-start items-start  gap-5 overflow-auto">
        {category.map((item) => (
          <CategoryCard item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
