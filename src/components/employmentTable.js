import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "./employmentTable.css";

/**
 * Functional component representing a table for displaying employment data.
 * @param {Array} data - The data to be displayed in the table.
 * @param {Array} columns - The columns configuration for the table.
 * @returns {JSX.Element} JSX representing the EmploymentTable component.
 */
export default function EmploymentTable({ data, columns }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [searchInput, setSearchInput] = React.useState('');

    /**
     * Handler for changing the page
     * @param {Event} event - The event object
     * @param {number} newPage - The new page number
     */
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    /**
     * Handler for changing the rows per page
     * @param {Event} event - The event object
     */
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    /**
     * Handler for changing the search input
     * @param {Event} event - The event object
     */
    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
        setPage(0);
    };

    const filteredData = data.filter((row) =>
        Object.values(row).some((value) =>
            value.toString().toLowerCase().includes(searchInput.toLowerCase())
        )
    );

    return (
        <div>

            <div className='searchContainer'>
                <label>Search: </label>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={handleSearchChange}
                    className='searchInput'
                />
            </div>
            <div className='container'>
                <Paper id="table">
                    <TableContainer sx={{ maxHeight: 600 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align="center"
                                            style={{ minWidth: column.minWidth }}
                                            className={column.className}
                                        >
                                            <div className='tableText'>
                                                {column.label}
                                            </div>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredData
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            {columns.map((column) => (
                                                <TableCell key={column.id} align="center" className={column.className}>
                                                    <div className='tableText'>
                                                        {row[column.id]}
                                                    </div>
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={filteredData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </div>
    );
}