import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'description', label: 'Description', minWidth: 170 },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'category',
    label: 'Category',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'shipping',
    label: 'Shipping',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'createdAt',
    label: 'Created At',
    minWidth: 170,
    align: 'right'
  }
];

// temporory data

const data = [
  {
    name: 'Redmi note 5 pro',
    description: 'High quality buget smart phone',
    price: '12000',
    category: 'mobile',
    quantity: '22',
    shipping: 'true',
    createdAt: '212323'
  }
];

export default function ProductTable({ productList }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
            {productList
              ? productList?.map((item, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell align="center">{item?.name}</TableCell>
                      <TableCell align="center">{item?.description}</TableCell>
                      <TableCell align="right">{item?.price}</TableCell>
                      <TableCell align="right">{item?.category.name}</TableCell>
                      <TableCell align="right">{item?.quantity}</TableCell>
                      <TableCell align="right">{item?.shipping}</TableCell>
                      <TableCell align="center">{item?.createdAt}</TableCell>
                    </TableRow>
                  );
                })
              : data?.map((item, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell align="center">{item?.name}</TableCell>
                      <TableCell align="center">{item?.description}</TableCell>
                      <TableCell align="right">{item?.price}</TableCell>
                      <TableCell align="right">{item?.category}</TableCell>
                      <TableCell align="right">{item?.quantity}</TableCell>
                      <TableCell align="right">{item?.shipping}</TableCell>
                      <TableCell align="center">{item?.createdAt}</TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={productList?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
