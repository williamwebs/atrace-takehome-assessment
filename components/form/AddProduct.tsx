"use client";

import { useEffect, useState } from "react";
import InputField from "../input/InputField";
import { Package, Product, ProductForm } from "../../types/types";
import { useProductStore } from "../../store/products";

const AddProduct = ({ product }: ProductForm) => {
  const { createProduct, updateProduct } = useProductStore();
  const initialProduct: Product = {
    id: "",
    title: "",
    recipient: "",
    recipientPhone: "",
    description: "",
    origin: "",
    destination: "",
    eta: 0,
    packages: [
      {
        name: "",
        weight: 0,
        weightUnit: "kg",
        quantity: 0,
        quantityUnit: "pcs",
      },
    ],
    status: "pending",
  };
  const [formData, setFormData] = useState<Product>(initialProduct);

  // initialize formData during edit
  useEffect(() => {
    if (product) setFormData(product);
  }, [product]);

  // handle input change fn
  const handleChange = (
    field: keyof Product | { packageIndex: number; field: keyof Package },
    value: any
  ) => {
    setFormData((prev) => {
      // Handle cases for regular fields like "title", etc
      if (typeof field === "string") {
        return { ...prev, [field]: value };
      } else {
        // Handle nested fields like "packages[0].name"
        const { packageIndex, field: packageField } = field;
        const updatedPackages = [...prev.packages];
        updatedPackages[packageIndex] = {
          ...updatedPackages[packageIndex],
          [packageField]: value,
        };
        return { ...prev, packages: updatedPackages };
      }
    });
  };

  // form submit fn to add / update the products
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    if (product) {
      updateProduct(product.id, formData);
      console.log(formData);
      alert("Product updated!");
    } else {
      createProduct(formData);
      alert("Product added!");
      setFormData(initialProduct);
    }
  };

  return (
    <>
      <h3 className="text-xl font-semibold mb-1">
        {product ? "Edit Product" : "Add Product"}
      </h3>
      <form onSubmit={handleSubmit}>
        <InputField
          isLabel={true}
          label={"Title"}
          inputType={"text"}
          inputName={"title"}
          isRequired={true}
          isError={true}
          value={formData.title}
          onChangeFn={(e) => handleChange("title", e.target.value)}
          type="input"
          errorMessage={"Please enter a valid product title"}
        />

        <div className="flex items-center justify-between gap-3 w-full">
          <div className="w-full md:w-1/2">
            <InputField
              isLabel={true}
              label={"Recipient"}
              inputType={"text"}
              inputName={"recipient"}
              isRequired={true}
              isError={true}
              value={formData.recipient}
              type="input"
              errorMessage={"Please a valid recipient"}
              onChangeFn={(e) => handleChange("recipient", e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2">
            <InputField
              isLabel={true}
              label={"Recipient Phone"}
              inputType={"text"}
              inputName={"recipientPhone"}
              isRequired={true}
              isError={true}
              value={formData.recipientPhone}
              type="input"
              errorMessage={"Please a valid recipient phone"}
              onChangeFn={(e) => handleChange("recipientPhone", e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 w-full">
          <div className="w-full md:w-1/2">
            <InputField
              isLabel={true}
              label={"Description"}
              inputType={"text"}
              inputName={"description"}
              isRequired={true}
              isError={true}
              value={formData.description}
              type="input"
              errorMessage={"Please a valid description"}
              onChangeFn={(e) => handleChange("description", e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2">
            <InputField
              isLabel={true}
              label={"Origin"}
              inputType={"text"}
              inputName={"origin"}
              isRequired={true}
              isError={true}
              value={formData.origin}
              type="input"
              errorMessage={"Please a valid origin"}
              onChangeFn={(e) => handleChange("origin", e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 w-full">
          <div className="w-full md:w-1/2">
            <InputField
              isLabel={true}
              label={"Destination"}
              inputType={"text"}
              inputName={"destination"}
              isRequired={true}
              isError={true}
              value={formData.destination}
              type="input"
              errorMessage={"Please a valid destination"}
              onChangeFn={(e) => handleChange("destination", e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2">
            <InputField
              isLabel={true}
              label={"ETA"}
              inputType={"datetime-local"}
              inputName={"eta"}
              isRequired={true}
              isError={true}
              value={formData.eta}
              //   value={new Date(formData.eta).toISOString().slice(0, 16)}
              type="input"
              errorMessage={"Please a valid ETA"}
              onChangeFn={(e) => handleChange("eta", e.target.value)}
            />
          </div>
        </div>

        <h4 className="my-1 font-semibold">Package Details</h4>
        <div className="flex items-center justify-between gap-3 w-full">
          <div className="w-full md:w-1/2">
            <InputField
              isLabel={true}
              label={"Name"}
              inputType={"text"}
              inputName={"pkg-name"}
              isRequired={true}
              isError={true}
              value={formData.packages[0].name}
              type="input"
              errorMessage={"Please a package name"}
              onChangeFn={(e) =>
                handleChange({ packageIndex: 0, field: "name" }, e.target.value)
              }
            />
          </div>
          <div className="w-full md:w-1/2">
            <InputField
              isLabel={true}
              label={"Weight"}
              inputType={"number"}
              inputName={"pkg-weight"}
              isRequired={true}
              isError={true}
              value={formData.packages[0]?.weight}
              type="input"
              errorMessage={"Please a package weight"}
              onChangeFn={(e) =>
                handleChange(
                  { packageIndex: 0, field: "weight" },
                  e.target.value
                )
              }
              defaultValue={1}
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 w-full">
          <div className="w-full md:w-1/2">
            <InputField
              isLabel={true}
              label={"Weight Unit"}
              inputName={"pkg-weight-unit"}
              isRequired={true}
              isError={true}
              value={formData.packages[0]?.weightUnit}
              errorMessage={"Please a valid unit"}
              type="select"
              options={[
                {
                  value: "kg",
                  label: "kg",
                },
                {
                  value: "lbs",
                  label: "lbs",
                },
              ]}
              onChangeFn={(e) =>
                handleChange(
                  { packageIndex: 0, field: "weightUnit" },
                  e.target.value
                )
              }
            />
          </div>
          <div className="w-full md:w-1/2">
            <InputField
              isLabel={true}
              label={"Quantity"}
              inputType={"number"}
              inputName={"pkg-quantity"}
              isRequired={true}
              isError={true}
              value={formData.packages[0]?.quantity}
              type="input"
              errorMessage={"Please a quantity"}
              onChangeFn={(e) =>
                handleChange(
                  { packageIndex: 0, field: "quantity" },
                  e.target.value
                )
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 w-full">
          <div className="w-full md:w-1/2">
            <InputField
              isLabel={true}
              label={"Quantity Unit"}
              inputName={"pkg-quantity-unit"}
              isRequired={true}
              isError={true}
              value={formData.packages[0]?.quantityUnit}
              errorMessage={"Please a valid unit"}
              type="select"
              options={[
                {
                  value: "pcs",
                  label: "pcs",
                },
                {
                  value: "boxes",
                  label: "boxes",
                },
              ]}
              onChangeFn={(e) =>
                handleChange(
                  { packageIndex: 0, field: "quantityUnit" },
                  e.target.value
                )
              }
              defaultValue={1}
            />
          </div>
          <div className="w-full md:w-1/2 self-end pb-2">
            <button
              type="submit"
              className="w-full border rounded py-2 bg-dark text-white hover:bg-gray-900 transition-all duration-200"
            >
              {product ? "Update Product" : " Add Product"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
