import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import { Box, Menu, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  background: #f7f8ff7d;
  color: black;
`;

export const StyledBannerDiv = styled.div`
  background: #c7c7c794;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBoxForHeader1 = styled(Box)`
  background: #fff;
  flexgrow: 1;
  .css-1ofles3-MuiPaper-root-MuiAppBar-root {
    background: none;
  }
`;

export const StyledMenuFromProfile = styled(Menu)`
  .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper {
    top: 17% !important;
    left: 80% !important;
  }
`;

export const StyledParentBoxForFilterSection = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 7px 0px;
`;
export const StyledChild1BoxForFilterSection = styled(Box)`
  width: 99%;
  background: #fff;
  borderradius: 5px;
  display: flex;
  overflow-x: auto;
  border-radius: 3px;
  align-items: center;
`;
export const StyledTypographyForFilterSection = styled(Typography)`
  margin: 10px 30px;
  cursor: pointer;
  color: #44586c;
  font-weight: bold;
`;

export const StyledPriceAndRatingBoxForFilterSection = styled(Box)`
  display: flex;
  align-items: center;
  border-right: 1px solid gray;
  height: 90%;
  padding: 0px 10px;
`;
