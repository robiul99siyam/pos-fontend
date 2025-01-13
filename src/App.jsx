import { useState } from "react";
import Bills from "./Bills/Bills";
import Category from "./category/Category";
import Headers from "./header/Headers";
import Products from "./product/Products";
export default function App() {
  const [state, setState] = useState("");
  const handleClick = (e) => {
    console.log(e);
    setState(e);
  };

  return (
    <div className="mx-10 my-5 font-serif">
      {/* grid */}
      <div className="grid grid-cols-12 gap-2">
        {/* grid col-span-8 */}
        <div className="col-span-8">
          <Headers />
          <div className="grid grid-cols-12 mt-8">
            {/* grid */}
            <div className="col-span-1">
              <h1>Product List 1</h1>
            </div>
            {/* grid */}
            <div className="col-span-11 ml-[45px]">
              <Category handleClick={handleClick} />
              <div className="sticky top-0">
                <p className="font-bold text-xl mt-10  bg-white z-10">
                  {state || "ALL"}
                </p>
              </div>
              <Products />
            </div>
          </div>
        </div>

        {/* grid cols - 4 */}
        <div className="col-span-4">
          <h1 className="font-semibold text-xl">Bills</h1>
          <Bills />
        </div>
      </div>
    </div>
  );
}
