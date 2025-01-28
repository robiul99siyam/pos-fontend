import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { CategoryFetch } from "../../fetures/CategoryFetch";
import { useCategory } from "../../hooks/useCategory";

export default function CategoryChart() {
  const { state } = useCategory();
  const { loading, error } = CategoryFetch();
  const navigate = useNavigate();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleEditCateogry = (category) => {
    if (!category) {
      return;
    }

    navigate("", { state: { category } });
  };
  return (
    <div
      className="w-full max-h-80 overflow-y-auto border border-gray-300 rounded-lg 
    shadow"
    >
      <div className="table w-full">
        <div className="table-header-group ">
          <div className="table-row">
            <div className="table-cell text-left border border-gray-400 px-4 py-2">
              Id
            </div>
            <div className="table-cell text-left border border-gray-400 px-4 py-2">
              Name
            </div>
            <div className="table-cell text-left border border-gray-400 px-4 py-2">
              Image
            </div>
            <div className="table-cell text-left border border-gray-400 px-4 py-2">
              Action
            </div>
          </div>
        </div>
        <div className="table-row-group">
          {state?.categorys.map((category) => (
            <div key={category.id} className="table-row">
              <div className="table-cell border border-gray-300 px-4 py-2">
                {category.id}
              </div>
              <div className="table-cell border border-gray-300 px-4 py-2">
                {category.name}
              </div>
              <div className="table-cell border border-gray-300 px-4 py-2">
                <img
                  src={
                    category?.image
                      ? `${import.meta.env.VITE_SERVER_BASE_URL}/${
                          category?.image
                        }`
                      : "https://via.placeholder.com/150"
                  }
                  className="w-12 h-12 object-cover rounded-full"
                  alt={category?.name || "Category"}
                />
              </div>
              <div className="table-cell border border-gray-300 px-4 py-2">
                <div className="flex gap-2 justify-center">
                  {" "}
                  <MdOutlineEdit
                    onClick={() => handleEditCateogry(category)}
                    className="text-2xl"
                  />
                  <RiDeleteBin6Line className="text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
