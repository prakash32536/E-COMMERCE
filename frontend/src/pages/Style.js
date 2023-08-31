import styled from '@emotion/styled';
import { CardContent, Grid, Card, Box, Typography, Button } from '@mui/material';

export const StyledCard = styled(Card)`
  width: 65%;
  margin-top: 30px;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

export const StyledGridForUserLinkAndInfo = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledBoxForUserLinkAndInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12vh;
  background: #c7c7c794;
  width: 100%;
  .styled_link {
    margin-top: 4px;
    font-size: 14px;
    color: #551a8b;
  }
`;

export const AdminDashboardWrapper = styled.div`
  padding: 20px;
  background-color: #ffe6e6;
  min-height: 100vh;
`;

export const StyledGridForProduct = styled(Grid)`
  width: 99%;
  background: white;
  margin: 10px 0px;
  justify-content: center;
  border-radius: 3px;
`;

export const StyledProductDetailsCardPriceBox = styled(Box)`
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin: 5px;
`;
export const StyledProductDetailsCardPriceTypography = styled(Typography)`
  margin-top: 10px;
`;
export const StyledProductDetailsCardBox = styled(Box)`
  width: 70%;
  border: 1px solid #85858591;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledGridForProductDetailsRight = styled(Grid)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButtonForProductDetailsAddToCard = styled(Button)`
  background: black;
  color: white;
  width: 30%;
`;

export const StyledImageForProduct = styled.img`
  width: ${(props) => (props.width ? props.width : '70%')};
  height: ${(props) => (props.height ? props.height : '70%')};
`;

export const StyledGridForAddToCard = styled(Grid)`
  width: 100%;
`;
