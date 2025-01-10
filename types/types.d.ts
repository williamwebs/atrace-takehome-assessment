import { Dispatch, SetStateAction } from "react";

export type Status = "pending" | "delivered" | "cancelled";

export type Package = {
  name: string;
  weight: number;
  weightUnit: string;
  quantity: number;
  quantityUnit: string;
};

export type Product = {
  id: string;
  title: string;
  status: Status;
  description: string;
  packages: Package[];
  recipient: string;
  recipientPhone: string;
  origin: string;
  destination: string;
  eta: number;
};

export type ProductsByStatus = {
  pending: number;
  delivered: number;
  cancelled: number;
};

export type ProductList = {
  products: Product[];
  page: number;
  pageSize: number;
  total: number;
};

export interface ProductForm {
  product?: Product | null;
  // onSubmit: (data: Product) => void;
}

export interface InputOptions {
  value: string;
  label?: string;
}

export interface InputFieldProps {
  label: string;
  isLabel: boolean;
  inputType?: string;
  inputName: string;
  isRequired: boolean;
  isError?: boolean;
  errorMessage: string;
  type: "input" | "select" | "textarea";
  options?: InputOptions[];
  placeholder?: string;
  defaultValue?: string | number;
  value?: string | number;
  onChangeFn: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  // setOpenModal: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export interface PaginationProps {
  page: number;
  pageSize: number;
  totalProducts: number;
  setPage: Dispatch<SetStateAction<number>>;
}
