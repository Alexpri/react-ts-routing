import { useContext } from "react";
import { CreateProduct } from "../components/CreateProduct";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { ModalContext } from "../context/ModalContext";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";

export function ProductsPage() {
  const { isLoading, error, products, addProduct } = useProducts();
  const { modal, openModal, closeModal } = useContext(ModalContext);
  const createHandler = (product: IProduct) => {
    closeModal();
    addProduct(product);
  };
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <button
        className="fixed bottom-5 right-5 rounded-full py-3 px-4 bg-blue-400 text-white"
        onClick={() => openModal()}
      >
        +
      </button>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create New Product" onClose={() => closeModal()}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
    </div>
  );
}
