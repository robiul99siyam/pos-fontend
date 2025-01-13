import Category from "./category/Category";
import Headers from "./header/Headers";

export default function App() {
  return (
    <div className="mx-10 my-5 font-sans">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-8">
          <Headers />
          <div className="grid grid-cols-12 mt-8">
            <div className="col-span-1">
              <h1>Product List 1</h1>
            </div>
            <div className="col-span-11 ml-[45px]">
              <Category />
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <h1>Bill part</h1>
        </div>
      </div>
    </div>
  );
}
