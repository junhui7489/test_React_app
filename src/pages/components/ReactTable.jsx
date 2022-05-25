import * as React from "react";
import "../../App.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import ReactButton from './ReactButton';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

class ReactTable extends React.Component{
  constructor(props){
      super(props);
      this.state = {newPage: 0, page: 0, rowsPerPage: 10, buttonToggle1: false, 
        buttonToggle2: false, buttonToggle3: false, buttonToggle4: false, buttonToggle5: false };
  }

  handlePageChangeHandler = (event, newPage) => {
    //console.log(newPage)
    this.setState({page: newPage})
  };

  handleChangeRowsPerPageHandler = (event) => {
    //console.log(event.target.value);
    this.setState({rowsPerPage: parseInt(event.target.value, 10)});
  };

  render() {
    return (
      <React.Fragment>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
            <Table className='listTable' sx={{ minWidth: 800 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="left">Album&nbsp;Id</TableCell>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="left">Url</TableCell>
                  <TableCell align="left">Thumbnail Url</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                this.props.data.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                .filter((data) => data.id <= 5)
                .map((row) => (
                    <TableRow
                    key={row.id}
                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.albumId}</TableCell>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.url}</TableCell>
                    <TableCell align="left">{row.thumbnailUrl}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ width: '100%' }}>
          <TablePagination
            component="Box"
            rowsPerPageOptions={[5,10]}
            count={this.props.data.length}
            onPageChange={this.handlePageChangeHandler}
            rowsPerPage={this.state.rowsPerPage}
            onRowsPerPageChange={this.handleChangeRowsPerPageHandler}
            page={this.state.page}
          />
          </Box>
        </Paper>
      </Box>
    </React.Fragment>
    );
  }
}

ReactTable.propTypes = {
  data: PropTypes.array
};

ReactTable.defaultProps = {
  data: [
    {
      albumId: 2,
      id: 85,
      title: 'ullam delectus architecto sint error',
      url: 'https://via.placeholder.com/600/eb7e7f',
      thumbnailUrl: 'https://via.placeholder.com/150/eb7e7f'
    },
    {
      albumId: 2,
      id: 86,
      title: 'qui vel ut odio consequuntur',
      url: 'https://via.placeholder.com/600/fd5751',
      thumbnailUrl: 'https://via.placeholder.com/150/fd5751'
    },
    {
      albumId: 2,
      id: 87,
      title: 'eos nihil sunt accusantium omnis',
      url: 'https://via.placeholder.com/600/224566',
      thumbnailUrl: 'https://via.placeholder.com/150/224566'
    },
    {
      albumId: 2,
      id: 88,
      title: 'inventore veritatis magnam enim quasi',
      url: 'https://via.placeholder.com/600/75334a',
      thumbnailUrl: 'https://via.placeholder.com/150/75334a'
    },
    {
      albumId: 2,
      id: 89,
      title: 'id at cum incidunt nulla dolor vero tenetur',
      url: 'https://via.placeholder.com/600/21d35',
      thumbnailUrl: 'https://via.placeholder.com/150/21d35'
    },
    {
      albumId: 2,
      id: 90,
      title: 'et quae eligendi vitae maxime in',
      url: 'https://via.placeholder.com/600/bfe0dc',
      thumbnailUrl: 'https://via.placeholder.com/150/bfe0dc'
    },
    {
      albumId: 2,
      id: 91,
      title: 'sunt quo laborum commodi porro consequatur nam delectus et',
      url: 'https://via.placeholder.com/600/40591',
      thumbnailUrl: 'https://via.placeholder.com/150/40591'
    },
    {
      albumId: 2,
      id: 92,
      title: 'quod non quae',
      url: 'https://via.placeholder.com/600/de79c7',
      thumbnailUrl: 'https://via.placeholder.com/150/de79c7'
    }
  ]
};

export default ReactTable;