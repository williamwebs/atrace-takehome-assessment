"use client";

import Summary from "../components/card/Summary";
import AddProduct from "../components/form/AddProduct";
import Modal from "../components/modal/Modal";
import Pagination from "../components/pagination/Pagination";
import Table from "../components/table/Table";
import { useProductStore } from "../store/products";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const {
    products,
    fetchProducts,
    countProducts,
    productsByStatus,
    initialData,
    deleteProduct,
  } = useProductStore();
  const productList = fetchProducts(page, 5);
  const totalProducts = countProducts();
  const statusCount = productsByStatus();

  useEffect(() => {
    if (products.length === 0) initialData();
  }, [initialData, products]);

  return (
    <>
      <main className="flex flex-col gap-8">
        {/* summary boxes */}
        <section className="md:shadow rounded w-full h-full md:px-4 py-3">
          <h3 className="text-xl font-semibold mb-1">Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <Summary heading="Total Products" count={totalProducts} />
            <Summary heading="Delivered" count={statusCount.delivered} />
            <Summary heading="Pending" count={statusCount.pending} />
            <Summary heading="Cancelled" count={statusCount.cancelled} />
          </div>
        </section>
        {/* data table */}
        <section className="md:shadow rounded w-full h-full md:px-4 py-3">
          <h3 className="text-xl font-semibold mb-1">Data Table</h3>

          {/* Table section */}
          <div className="w-full">
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="px-3 md:px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                      {/* Input */}
                      <div className="col-span-1">
                        <label className="sr-only">Search</label>
                        <div className="relative">
                          <input
                            type="text"
                            name="search"
                            className="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="Search"
                          />
                          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                            <svg
                              className="shrink-0 size-4 text-gray-400 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <circle cx="11" cy="11" r="8" />
                              <path d="m21 21-4.3-4.3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* End Input */}

                      <div className="sm:col-span-2 md:grow">
                        <div className="flex justify-start md:justify-end gap-x-2">
                          <div
                            className="hs-dropdown [--placement:bottom-right] relative inline-block"
                            data-hs-dropdown-auto-close="inside"
                          >
                            <button
                              onClick={() => setOpenModal(true)}
                              type="button"
                              className="py-2 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                            >
                              Add Product
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Table
                      productList={productList}
                      deleteProduct={deleteProduct}
                    />

                    {/* Pagination */}
                    <Pagination
                      page={page}
                      pageSize={5}
                      totalProducts={totalProducts}
                      setPage={setPage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </section>
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <AddProduct />
        </Modal>
      </main>
    </>
  );
}
