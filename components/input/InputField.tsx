import { InputFieldProps } from "../../types/types";

const InputField = ({
  label,
  isLabel,
  inputName,
  inputType,
  isRequired,
  isError,
  errorMessage,
  type,
  options,
  placeholder,
  defaultValue,
  value,
  onChangeFn,
}: InputFieldProps) => {
  return (
    <div>
      {isLabel && (
        <label htmlFor="email" className="block text-sm mb-2">
          {label}
        </label>
      )}

      {/* select */}
      {type === "select" && (
        <div className="relative">
          <select
            name={inputName}
            className="py-2 px-4 block w-full -ml-0.5 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            required={isRequired}
            onChange={(e) => onChangeFn(e)}
            value={value}
          >
            <option value="" disabled>
              Select an option
            </option>
            {options?.map((option, index) => (
              <option
                value={option.value}
                key={option.value}
                defaultValue={index === 0 ? `${option.label}` : ""}
              >
                {option.value || option.label}
              </option>
            ))}
          </select>
          <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
            <svg
              className="size-5 text-red-500"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </div>
        </div>
      )}

      {/* input */}
      {type === "input" && (
        <div className="relative">
          <input
            type={inputType}
            name={inputName}
            value={value}
            defaultValue={defaultValue}
            className="py-3 px-4 block w-full -ml-0.5 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            required={isRequired}
            onChange={(e) => onChangeFn(e)}
          />
          <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
            <svg
              className="size-5 text-red-500"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </div>
        </div>
      )}

      {isError && (
        <p className="hidden text-xs text-red-600 mt-2" id="email-error">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;
