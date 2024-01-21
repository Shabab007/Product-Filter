import React, { useMemo, useState } from 'react';
import { ProductData } from '../ProductList/types';
import { customRound } from '../../helpers/FilterHelper';
import Star from '../StarRating/Star';
import MyModal from '../../Modal';

const Product = ({ product }: { product: ProductData }) => {
  const [openModal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const stars = useMemo(
    () => Array.from({ length: 5 }, (_, index) => index + 1),
    []
  );

  return (
    <div onClick={handleOpenModal} className="cursor-pointer">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none object-contain group-hover:opacity-75 lg:h-80">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
      <div className="flex gap-1">
        {stars.map((star, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              star <= customRound(product.rating.rate)
                ? 'text-yellow-500'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      {openModal && (
        <MyModal
          isOpen={openModal}
          openModal={handleOpenModal}
          closeModal={handleCloseModal}
        >
          <div className="relative">
            <img
              src={product.image}
              alt="Loaded Image"
              className={`w-full h-full object-contain`}
            />
          </div>
        </MyModal>
      )}
    </div>
  );
};

export default React.memo(Product);
