import styled from '@emotion/styled';
import { List, Typography, ListItem } from '@mui/material';

export const StyledSideDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #054d55;
  height: 100vh;
  z-index: 99;
  width: 220px;
`;
export const ListStyled = styled(List)`
  background: transparent;
  font-weight: 400;
`;

export const StyledTypography = styled(Typography)`
  color: white;
  font-size: 20px;
  margin-left: 20px;
  cursor: pointer;
`;
export const StyledListItem = styled(ListItem)`
  border-bottom: 1px solid white;
`;

export const ParentDiv = styled.div`
  padding-left: 220px;
`;
