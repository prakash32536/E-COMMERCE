import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledImageForProduct, StyledGridForAddToCard } from './Style';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCard } from '../actions/AddToCardAction';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../components/Header';
import { Typography, Grid } from '@mui/material';

export default function Card() {
  const dispatch = useDispatch();
  const params = useParams();
  let productId = params.productId;
  const cardItems = useSelector((state) => state.addToCardReducer);
  const [cardList, setCardList] = useState([]);
  const productQuantity = params.quantity;

  const handleDeleteCardItem = () => {};

  console.log('cardItems', cardItems);
  const getCardTotal = () => {
    console.log('cardItems', cardItems);
    return cardItems.cardItems.reduce((currentValue, nextValue) => {
      console.log('currentValue', currentValue);
      console.log('nextValue', nextValue);
      return currentValue + nextValue.quantity * nextValue.price;
    }, 0);
  };

  const columns = [
    { id: 'image', label: 'Image', minWidth: 100, align: 'center' },
    { id: 'name', label: 'Name', minWidth: 100, align: 'center' },
    { id: 'price', label: 'Price', minWidth: 100, align: 'center' },
    {
      id: 'quantity',
      label: 'Quantity',
      minWidth: 100,
      align: 'center'
    }
  ];

  // temporory data

  const data = [
    {
      image: '64d3a9747b50b5f0c64e9602',
      name: '----',
      price: '---',
      quantity: 2
    }
  ];

  useEffect(() => {
    dispatch(addToCard(productId, productQuantity));
  }, []);

  useEffect(() => {
    setCardList(cardItems);
  }, [cardItems]);

  return (
    <>
      <Header />
      <Grid container>
        <StyledGridForAddToCard item sx={12} md={8} lg={8}>
          <Paper sx={{ overflow: 'hidden', margin: '20px 10px' }}>
            <TableContainer sx={{ maxHeight: 360 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'black' }}>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cardList.cardItems
                    ? cardList.cardItems?.map((item, index) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell align="center">
                              <StyledImageForProduct
                                src={`http://localhost:8000/api/product/photo/${item?.id}`}
                                alt="Product Image"
                                height="30px"
                                width=" 30px"
                              />
                            </TableCell>
                            <TableCell align="center">{item?.name}</TableCell>
                            <TableCell align="center">{item?.price}</TableCell>
                            <TableCell align="center">{item?.quantity}</TableCell>
                            <TableCell align="center">
                              <DeleteIcon onClick={handleDeleteCardItem} />
                            </TableCell>
                          </TableRow>
                        );
                      })
                    : data?.map((item, index) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell align="center">
                              <StyledImageForProduct
                                src={`http://localhost:8000/api/product/photo/${item?.image}`}
                                alt="Product Image"
                                height="30px"
                                width=" 30px"
                              />
                            </TableCell>
                            <TableCell align="center">{item?.name}</TableCell>
                            <TableCell align="center">{item?.price}</TableCell>
                            <TableCell align="center">{item?.quantity}</TableCell>
                          </TableRow>
                        );
                      })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </StyledGridForAddToCard>
        <StyledGridForAddToCard item sx={12} md={4} lg={4}>
          <Paper sx={{ overflow: 'hidden', margin: '20px 10px', height: '40vh', width: '96%' }}>
            <Typography variant="h4">Total Amount</Typography>
            <Typography>{getCardTotal()}</Typography>
          </Paper>
        </StyledGridForAddToCard>
      </Grid>
    </>
  );
}
