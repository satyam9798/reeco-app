import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems, approveOrderItem } from '../store/orderSlice';
import { OrderItem, RootState } from '../types/types';
import Navbar from '../components/Navbar';
import {
  OrderPageContainer,
  OrderHeaderContainer,
  OrderNavigation,
  OrderTitle,
  ButtonContainer,
  BackButton,
  ApproveButton,
  OrderDetailsContainer,
  OrderDetailColumn,
  OrderDetailHeading,
  OrderDetailValue,
  OrderItemsContainer,
  OrderItemHeader,
  SearchBarContainer,
  SearchBar,
  SearchIcon,
  AddItemButton,
  PrintIcon,
  OrderGridContainer,
  GridHeader,
  GridRow,
  ImageContainer,
  Image,
  StatusColumn,
  Status,
  StatusIcons,
  EditIcon,
  ApprovedStatus,
  MissingStatus,
  MissingUrgentStatus
} from './orderPage-styled-components'; import { FaSearch, FaPlus, FaPrint, FaCheck, FaTimes, FaEdit } from 'react-icons/fa';

import { openModal, closeModal, selectModal } from '../store/modalSlice';
import MissingProductModal from './missingProductModal';




const OrderPage: React.FC = () => {
  const dispatch = useDispatch();
  const orderItems = useSelector((state: RootState) => state.order.items);
  const { isOpen, selectedItem } = useSelector(selectModal);

  const handleCrossClick = (item: OrderItem) => {
    dispatch(openModal(item));
  };

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const handleConfirmMissing = (isUrgent: boolean) => {
    console.log(`Missing product confirmed for ${selectedItem?.name}. Urgent: ${isUrgent}`);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/items.json');
        const data = await response.json();
        dispatch(setItems(data));
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [dispatch]);
    
  const handleTickClick = (itemId: string) => {
    dispatch(approveOrderItem(itemId))
  };

  return (
    <div>
      <Navbar/>
      <OrderPageContainer>

        <OrderHeaderContainer>
          <OrderNavigation>
            orders &gt; Order-32457A
          </OrderNavigation>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <OrderTitle>ORDER 32457A</OrderTitle>
            <ButtonContainer>
              <BackButton onClick={() => console.log('Go back')}>Back</BackButton>
              <ApproveButton onClick={() => console.log('Approve Order')}>Approve Order</ApproveButton>
            </ButtonContainer>
          </div>
        </OrderHeaderContainer>

        <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', padding: ' 0 7rem'}}>
          <OrderDetailsContainer>
            <OrderDetailColumn>
              <OrderDetailHeading>Supplier</OrderDetailHeading>
              <OrderDetailValue>East coast fruits and vegetables</OrderDetailValue>
            </OrderDetailColumn>
            <OrderDetailColumn>
              <OrderDetailHeading>Shipping Date</OrderDetailHeading>
              <OrderDetailValue>Thu, Feb 10</OrderDetailValue>
            </OrderDetailColumn>
            <OrderDetailColumn>
              <OrderDetailHeading>Total</OrderDetailHeading>
              <OrderDetailValue>$ 15,028.3</OrderDetailValue>
            </OrderDetailColumn>
            <OrderDetailColumn>
              <OrderDetailHeading>Category</OrderDetailHeading>
              <OrderDetailValue>Food</OrderDetailValue>
            </OrderDetailColumn>
            <OrderDetailColumn>
              <OrderDetailHeading>Department</OrderDetailHeading>
              <OrderDetailValue>300-444-678</OrderDetailValue>
            </OrderDetailColumn>
            <OrderDetailColumn>
              <OrderDetailHeading>Status</OrderDetailHeading>
              <OrderDetailValue>Awaiting your approval</OrderDetailValue>
            </OrderDetailColumn>
          </OrderDetailsContainer>

          <OrderItemsContainer>
            <OrderItemHeader>
              <SearchBarContainer>
                <SearchBar type="text" placeholder="Search..." />
                <SearchIcon>
                  <FaSearch />
                </SearchIcon>
              </SearchBarContainer>
           
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <AddItemButton>Add Item</AddItemButton>
                <PrintIcon>
                  <FaPrint />
                </PrintIcon>
              </div>
            </OrderItemHeader>
            <OrderGridContainer>
              <GridHeader>
                <div ></div>
                <div >Product Name</div>
                <div >Brand</div>
                <div >Price</div>
                <div >Quantity</div>
                <div >Total</div>
                <div >Status</div>
              </GridHeader>
              <MissingProductModal/>
              {orderItems.map((item) => (
                <GridRow key={item.id}>
                  <ImageContainer><Image src={item.image} alt="" /></ImageContainer>
                  <div >{item.name}</div>
                  <div >{item.brand}</div>
                  <div >{item.price}</div>
                  <div >{item.quantity}</div>
                  <div >{item.total}</div>
                  <StatusColumn>
                    <Status>{item.status === 'Approved' && <ApprovedStatus>Approved</ApprovedStatus>}
                            {item.status === 'Missing' && <MissingStatus>Missing</MissingStatus>}
                            {item.status === 'Missing-Urgent' && <MissingUrgentStatus>Missing Urgent</MissingUrgentStatus>}</Status>
                  <StatusIcons >
                    <FaCheck onClick={() => handleTickClick(item.id)} />
                    <FaTimes onClick={() => handleCrossClick(item)}/>
                    <EditIcon>Edit</EditIcon>
                    </StatusIcons>
                  </StatusColumn>
                </GridRow>
              
              ))}
              
            </OrderGridContainer>;
          
          </OrderItemsContainer>
        </div>
      </OrderPageContainer>
    </div>
  );
};

export default OrderPage;