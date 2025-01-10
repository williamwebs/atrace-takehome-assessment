import { Product } from "../../types/types";

interface Props {
  product: Product;
  deleteProduct: (id: string) => void;
  handleEditModal: (id: Product) => void;
}

const ProductListCard = ({
  product,
  deleteProduct,
  handleEditModal,
}: Props) => {
  return (
    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
      <td className="size-px whitespace-nowrap align-top">
        <div className="p-6">
          <p className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
            {product.id}
          </p>
        </div>
      </td>
      <td className="size-px whitespace-nowrap align-top">
        <div className="p-6">
          <p className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
            {product.title}
          </p>
        </div>
      </td>
      <td className="h-px w-72 min-w-72 align-top">
        <div className=" p-6">
          <p className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
            {product.description}
          </p>
        </div>
      </td>
      <td className="size-px whitespace-nowrap align-top">
        <div className="block p-6">
          <span
            className={`py-1 px-3 inline-flex items-center gap-x-1 text-xs font-medium rounded-full ${
              product.status === "pending"
                ? "bg-yellow-300"
                : product.status === "delivered"
                ? "bg-teal-100 text-teal-800"
                : product.status === "cancelled"
                ? "bg-red-300"
                : ""
            }`}
          >
            {product.status}
          </span>
        </div>
      </td>
      <td className="size-px whitespace-nowrap align-top">
        <div className="block p-6">
          <p className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
            {product.eta}
          </p>
        </div>
      </td>
      <td className="size-px whitespace-nowrap align-top">
        <div className="block p-6">
          <button
            onClick={() => {
              if (product) handleEditModal(product);
            }}
            className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-transparent text-blue rounded border hover:bg-blue-50 focus:outline-none focus:bg-blue-50"
          >
            Edit
          </button>
        </div>
      </td>
      <td className="size-px whitespace-nowrap align-top">
        <div className="block p-6">
          <button
            onClick={() => {
              if (product.id) deleteProduct(product.id);
            }}
            className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-transparent text-red-500 rounded border hover:bg-blue-50 focus:outline-none focus:bg-blue-50"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductListCard;
