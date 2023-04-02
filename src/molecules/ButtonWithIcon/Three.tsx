// import { makeStyles } from '@material-ui/core';

// import { DataGrid } from '@mui/x-data-grid';
// import { GridColDef } from '@mui/x-data-grid/models';
// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', cellClassName: 'first-column' },
//   { field: 'name', headerName: 'Name' },
//   { field: 'age', headerName: 'Age' },
// ];

// const rows = [
//   { id: 1, name: 'John Doe', age: 30 },
//   { id: 2, name: 'Jane Doe', age: 25 },
// ];

// const useStyles = makeStyles({
//   firstColumn: {
//     backgroundColor: 'red',
//     color: 'white',
//   },
// });

// function MyDataGrid() {
//   const classes = useStyles();

//   return (
//     <DataGrid
//       rows={rows}
//       columns={columns}
//       autoHeight
//       getCellClassName={(params) =>
//         params.field === 'id' ? classes.firstColumn : ''
//       }
//     />
//   );
// }
// export default MyDat
import { ThreeDRotation } from "@mui/icons-material";
import React from "react";

import { ThreeDot } from "./ThreeDot";

interface FilterButtonProps {
  onClick: () => void;
}

const Filter: React.FC<FilterButtonProps> = ({ onClick }) => {
  return (
    <ThreeDot
      label=""
      icon={
        <svg
          width="2"
          height="14"
          viewBox="0 0 2 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13.6667C0.722222 13.6667 0.486111 13.5695 0.291666 13.375C0.0972218 13.1806 0 12.9445 0 12.6667C0 12.3889 0.0972218 12.1528 0.291666 11.9584C0.486111 11.7639 0.722222 11.6667 1 11.6667C1.27778 11.6667 1.51389 11.7639 1.70833 11.9584C1.90278 12.1528 2 12.3889 2 12.6667C2 12.9445 1.90278 13.1806 1.70833 13.375C1.51389 13.5695 1.27778 13.6667 1 13.6667ZM1 8.00004C0.722222 8.00004 0.486111 7.90282 0.291666 7.70837C0.0972218 7.51393 0 7.27782 0 7.00004C0 6.72226 0.0972218 6.48615 0.291666 6.29171C0.486111 6.09726 0.722222 6.00004 1 6.00004C1.27778 6.00004 1.51389 6.09726 1.70833 6.29171C1.90278 6.48615 2 6.72226 2 7.00004C2 7.27782 1.90278 7.51393 1.70833 7.70837C1.51389 7.90282 1.27778 8.00004 1 8.00004ZM1 2.33337C0.722222 2.33337 0.486111 2.23615 0.291666 2.04171C0.0972218 1.84726 0 1.61115 0 1.33337C0 1.0556 0.0972218 0.819485 0.291666 0.625041C0.486111 0.430596 0.722222 0.333374 1 0.333374C1.27778 0.333374 1.51389 0.430596 1.70833 0.625041C1.90278 0.819485 2 1.0556 2 1.33337C2 1.61115 1.90278 1.84726 1.70833 2.04171C1.51389 2.23615 1.27778 2.33337 1 2.33337Z"
            fill="#696A6E"
          />
        </svg>
      }
      variant="outlined"
    />
  );
};

export default Filter;
