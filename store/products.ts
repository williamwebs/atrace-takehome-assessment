import { Product, ProductList, ProductsByStatus } from "../types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductStore = {
  products: Product[];
  // functions
  fetchProducts: (page: number, pageSize: number) => ProductList;
  countProducts: () => number;
  productsByStatus: () => ProductsByStatus;
  createProduct: (product: Product) => void;
  updateProduct: (id: string, updatedProduct: Partial<Product>) => void;
  initialData: () => void;
  deleteProduct: (id: string) => void;
};

export const useProductStore = create(
  persist<ProductStore>(
    (set, get) => ({
      products: [],
      fetchProducts: (page, pageSize) => {
        const allProducts = get().products;
        const paginatedProducts = allProducts.slice(
          (page - 1) * pageSize,
          page * pageSize
        );

        return {
          products: paginatedProducts,
          page,
          pageSize,
          total: allProducts.length,
        };
      },
      countProducts: () => get().products.length,
      productsByStatus: () => {
        const statusCount = { pending: 0, delivered: 0, cancelled: 0 };
        get().products.forEach((product) => {
          statusCount[product.status] += 1;
        });

        return statusCount;
      },
      createProduct: (product) => {
        set((state) => ({
          products: [
            ...state.products,
            { ...product, id: `${Math.floor(10000 + Math.random() * 90000)}` },
          ],
          //   products: [...state.products, { ...product, id: `${Date.now()}` }],
        }));
      },
      deleteProduct: (id) => {
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        }));
      },
      updateProduct: (id, updatedProduct) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id ? { ...product, ...updatedProduct } : product
          ),
        }));
      },
      initialData: () => {
        const dummyData: Product[] = [
          {
            id: "1",
            title: "Product A",
            status: "pending",
            description: "Description htmlFor Product A",
            packages: [
              {
                name: "Package 1",
                weight: 5,
                weightUnit: "kg",
                quantity: 10,
                quantityUnit: "pcs",
              },
            ],
            recipient: "John Doe",
            recipientPhone: "123456789",
            origin: "Origin A",
            destination: "Destination A",
            eta: Math.floor(Date.now() / 1000) + 86400, // +1 day
          },
          {
            id: "2",
            title: "Product B",
            status: "delivered",
            description: "Description htmlFor Product B",
            packages: [
              {
                name: "Package 2",
                weight: 2,
                weightUnit: "kg",
                quantity: 5,
                quantityUnit: "pcs",
              },
            ],
            recipient: "Jane Doe",
            recipientPhone: "987654321",
            origin: "Origin B",
            destination: "Destination B",
            eta: Math.floor(Date.now() / 1000) - 86400, // -1 day
          },
          {
            id: "3",
            title: "Product C",
            status: "cancelled",
            description: "Description htmlFor Product C",
            packages: [
              {
                name: "Package 3",
                weight: 2,
                weightUnit: "kg",
                quantity: 5,
                quantityUnit: "pcs",
              },
            ],
            recipient: "Jane Doe",
            recipientPhone: "987654321",
            origin: "Origin C",
            destination: "Destination B",
            eta: Math.floor(Date.now() / 1000) - 86400, // -1 day
          },
          {
            id: "4",
            title: "Product D",
            status: "cancelled",
            description: "Description htmlFor Product D",
            packages: [
              {
                name: "Package 4",
                weight: 2,
                weightUnit: "kg",
                quantity: 5,
                quantityUnit: "pcs",
              },
            ],
            recipient: "Jane Doe",
            recipientPhone: "987654421",
            origin: "Origin C",
            destination: "Destination D",
            eta: Math.floor(Date.now() / 1000) - 86400, // -1 day
          },
          {
            id: "5",
            title: "Product E",
            status: "cancelled",
            description: "Description htmlFor Product D",
            packages: [
              {
                name: "Package 4",
                weight: 2,
                weightUnit: "kg",
                quantity: 5,
                quantityUnit: "pcs",
              },
            ],
            recipient: "Jane Doe",
            recipientPhone: "987654421",
            origin: "Origin C",
            destination: "Destination D",
            eta: Math.floor(Date.now() / 1000) - 86400, // -1 day
          },
          {
            id: "6",
            title: "Product F",
            status: "cancelled",
            description: "Description htmlFor Product D",
            packages: [
              {
                name: "Package 4",
                weight: 2,
                weightUnit: "kg",
                quantity: 5,
                quantityUnit: "pcs",
              },
            ],
            recipient: "Jane Doe",
            recipientPhone: "987654421",
            origin: "Origin C",
            destination: "Destination D",
            eta: Math.floor(Date.now() / 1000) - 86400, // -1 day
          },
        ];
        set({ products: dummyData });
      },
    }),
    {
      name: "product-storage",
    }
  )
);
