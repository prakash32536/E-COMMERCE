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
  { id: 'email', label: 'Email', minWidth: 170 },
  {
    id: 'role',
    label: 'Role',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'createdAt',
    label: 'Created At',
    minWidth: 170,
    align: 'center'
  }
];

// temporory data

const data = [
  {
    name: 'Prakash',
    email: 'prakashds3789@gmail.com',
    about: 'Na',
    role: 1,
    createdAt: '2023-06-07T04:12:17.986Z'
  }
];

export default function StickyHeadTable({ userListInfo }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  console.log('userListInfo', userListInfo);

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
            {userListInfo
              ? userListInfo?.map((item, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell>{item?.name}</TableCell>
                      <TableCell>{item?.email}</TableCell>
                      <TableCell align="center">{item?.role}</TableCell>
                      <TableCell align="center">{item?.createdAt}</TableCell>
                    </TableRow>
                  );
                })
              : data?.map((item, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell align="center">{item?.name}</TableCell>
                      <TableCell align="center">{item?.email}</TableCell>
                      <TableCell align="right">{item?.role}</TableCell>
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
        count={userListInfo?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
