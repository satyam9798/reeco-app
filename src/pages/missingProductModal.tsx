import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../store/modalSlice';
import { selectModal } from '../store/modalSlice';
import { updateItemStatus } from '../store/orderSlice';

import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border-radius: 4px;
  z-index: 9999; 
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 9998; 
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalHeading = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: black;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const YesButton = styled.button`
font-size: 1rem;
  color: black;
  border: none;
  background: none;
  margin: 1rem;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
`;

const NoButton = styled.button`
font-size: 1rem;
  color: black;
  background: none;
  margin: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const MissingProductModal: React.FC = () => {
  const { isOpen, selectedItem } = useSelector(selectModal);
  const dispatch = useDispatch();

  const handleYesClick = () => {
    dispatch(closeModal());
    console.log(selectedItem.id)
    dispatch(updateItemStatus({ itemId: selectedItem.id, status: 'Missing-Urgent' }));
  };

  const handleNoClick = () => {
    dispatch(closeModal());
    dispatch(updateItemStatus({ itemId: selectedItem.id, status: 'Missing' }));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  if (!isOpen || !selectedItem) {
    return null; 
  }

  return (
    <>
      <Overlay />
      <ModalContainer>
        <ModalHeader>
          <ModalHeading>Missing Product</ModalHeading>
          <CloseButton onClick={() => dispatch(closeModal())}>✕</CloseButton>
        </ModalHeader>
        <p>Is '{selectedItem?.name}....' urgent?</p>
        <ModalButtons>
          <NoButton onClick={handleNoClick}>No</NoButton>
          <YesButton onClick={handleYesClick}>Yes</YesButton>
        </ModalButtons>
      </ModalContainer>
    </>
  );
};

export default MissingProductModal;