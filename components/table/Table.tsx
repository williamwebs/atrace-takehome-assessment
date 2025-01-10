"use client";

import { Product, ProductList } from "../../types/types";
import ProductListCard from "../card/ProductList";
import Modal from "../modal/Modal";
import AddProduct from "../form/AddProduct";
import { useState } from "react";

interface Props {
  productList: ProductList;
  deleteProduct: (id: string) => void;
}

const Table = ({ productList, deleteProduct }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const editProduct = (data: Product) => {
    setSelectedProduct(data);
    setOpenModal(true);
    console.log(data);
  };

  return (
    <>
      <table className="w-full overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                  Product ID
                </span>
              </div>
            </th>

            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  Title
                </span>
              </div>
            </th>

            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  Description
                </span>
              </div>
            </th>

            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  Status
                </span>
              </div>
            </th>

            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  ETA
                </span>
              </div>
            </th>

            <th scope="col" className="px-6 py-3 text-start"></th>
            <th scope="col" className="px-6 py-3 text-start"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
          {productList.products.map((product, index) => (
            <ProductListCard
              key={index}
              product={product}
              deleteProduct={deleteProduct}
              handleEditModal={() => editProduct(product)}
            />
          ))}
        </tbody>
      </table>

      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        children={<AddProduct product={selectedProduct} />}
      />
    </>
  );
};

export default Table;
