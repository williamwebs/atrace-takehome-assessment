import { ModalProps } from "../../types/types";

const Modal = ({ openModal, setOpenModal, children }: ModalProps) => {
  if (!openModal) return null;

  return (
    <section
      className={`w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-white/5 backdrop-blur-sm transition-all ${
        openModal ? "" : "hidden"
      }`}
    >
      <div className="max-w-xl w-full shadow-xl bg-white rounded border py-4 px-5 relative">
        {children}

        <div
          onClick={() => setOpenModal(false)}
          className="px-4 py-1 rounded text-sm bg-gray-100 text-gray-700 cursor-pointer flex items-center justify-center absolute top-1 right-1"
        >
          close
        </div>
      </div>
    </section>
  );
};

export default Modal;
