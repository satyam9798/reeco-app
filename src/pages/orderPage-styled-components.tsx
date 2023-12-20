import styled from 'styled-components';

export const OrderPageContainer = styled.div`
  color: black;
  background-color: #f7f7f7;
`;

export const OrderHeaderContainer = styled.div`
  background-color: white;
  padding: 1rem 7rem;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
`;

export const OrderNavigation = styled.div`
  color: #525252;
  margin-bottom: 1rem;
`;

export const OrderTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const BackButton = styled.button`
  background-color: white;
  color: #256c28;
  border: 2px solid #256c28;
  border-radius: 2rem;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    background-color: #256c28;
    color: white;
  }
`;

export const ApproveButton = styled.button`
  background-color: #256c28;
  color: white;
  padding: 10px 20px;
  border: 2px solid #256c28;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin-left: 1rem;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    background-color: #388e3c;
  }
`;

export const OrderDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 2rem 0;
  width: 100%;
  border: 1px solid #e4e3e3;
  border-radius: 1rem;
  background-color: white;
`;

export const OrderDetailColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 3rem;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    right: 0;
    width: 1px;
    background-color: #e4e3e3;
  }
`;

export const OrderDetailHeading = styled.div`
  color: #525252;
  font-weight: 500;
`;

export const OrderDetailValue = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const OrderItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e4e3e3;
  border-radius: 1rem;
  background-color: white;
  padding: 2rem 4rem;
  align-items: center;
`;

export const OrderItemHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchBar = styled.input`
  
  padding: 0.8rem 1rem ;
  border: 1px solid black;
  border-radius: 2rem;
  width: 70%;
  background-color: white;
  color: black;
`;

export const SearchIcon = styled.div`
position: absolute;
top: 50%;
right: 175px; 
transform: translateY(-50%);
`;

export const AddItemButton = styled.button`
  background-color: white;
  color: #256c28;
  border: 2px solid #256c28;
  border-radius: 2rem;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #256c28;
    color: white;
  }s
`;

export const PrintIcon = styled.div`
  font-size: 24px;
  color: #333;
  cursor: pointer;
  margin-left: 3rem;
`;

export const OrderGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1.5fr 1fr 1fr 4fr;
  gap: 1rem;
  padding: 1rem 0;
  border: 1px solid #ddd;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1.5fr 1fr 1fr 4fr;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #ddd;
  & > :last-child,
  & > :nth-last-child(2) {
    margin-right: 0;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover; 
`;

export const StatusColumn = styled.div`
  display: flex;
  background-color: #eeeeee;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;

export const Status = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const StatusIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 1rem;
  align-items: center;
  background-color: #eeeeee;
  height: 100%;
  width: 40%;
  cursor: pointer;
  & > * {
    transition: transform 0.2s ease-out;
  }
  & > *:hover {
    transform: translateY(-2px);
  }
`;

export const EditIcon = styled.div`
font-weight: 600;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const ApprovedStatus = styled.div`
    background-color: green;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  }
`;

export const MissingStatus = styled.div`
    background-color: orange;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  }
`;

export const MissingUrgentStatus = styled.div`
    background-color: red;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  }
`;