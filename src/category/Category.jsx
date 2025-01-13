import CategoryCard from "./CategoryCard";

export default function Category({ handleClick }) {
  return (
    <>
      <h1 className="text-xl font-bold"> Choose Category</h1>
      <CategoryCard handleClick={handleClick} />
    </>
  );
}
