import * as React from 'react';
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataLeaverequest } from "../../data/mockData";
import Header from "../../components/Header";
import Avatar from "@mui/material/Avatar";
import Modal from '@mui/material/Modal';

const Request = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = React.useState(mockDataLeaverequest);
  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: "0",
    borderRadius: "6px",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = React.useMemo(
    () => [
    { field: "id", headerName: "#" },
    {
      field: "user",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (params) => {
        return (
          <>
            <Avatar src={params.value.avatar} />
            {params.value.username}
          </>
        );
      }
    },
    {
      field: "date",
      headerName: "PERIOD",
      flex: 1,
    },
    {
      field: "days",
      headerName: "DAY(S)",
      flex: 1,
    },
    {
      field: "type",
      headerName: "LEAVE TYPE",
      flex: 1,
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: "ACTIONS",
        flex: 1,
        getActions: (params) => [
          <Button
              sx={{
                backgroundColor: "transparent",
                color: colors.grey[100],
                border: "1px solid #ffffff",
                borderRadius:"20px",
              }}
              onClick={deleteUser(params.id)}
            >
             Reject
            </Button>,
            <div>
              <Button
              sx={{
                backgroundColor: colors.greenAccent[500],
                color: colors.grey[100],
                borderRadius:"20px",
              }}
              onClick={handleOpen}
              >
                Approved
              </Button>
            </div>
        ],
      },
    ],
    // eslint-disable-next-line
    [deleteUser],
  );

  return (
    <Box>
      <Header title="Leave Request" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        backgroundColor="#1e1e1e"
        borderRadius="6px"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            whiteSpace: "break-spaces",
          },
          ".css-id9sxv-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell": {
            whiteSpace: "break-spaces",
            color: "#fff",
          },
          ".css-1530gax-MuiButtonBase-root-MuiCheckbox-root.Mui-checked": {
            color: "#c5c5c5",
          },
          ".css-101ia4i .MuiDataGrid-virtualScroller": {
            backgroundColor: "#1e1e1e",
          },
          ".MuiDataGrid-virtualScroller": {
            backgroundColor: "#1e1e1e",
          },
          ".MuiDataGrid-columnHeaders": {
            backgroundColor: "#272727",
          },
          ".MuiDataGrid-footerContainer": {
            backgroundColor: "#272727",
          },
          ".MuiDataGrid-row": {
            borderBottom: "1px solid #272727",
          },
          ".css-my4wps-MuiButtonBase-root-MuiButton-root:hover": {
            backgroundColor: "#2b2881",
          },
          // ".css-zwiamn": {
          //   m: 0,
          // },
        }}
      >
        <DataGrid checkboxSelection rows={rows} columns={columns} />
        <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Confirmation
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Are you sure you want to approve Vladimir Zuasola sick leave for one day?
                  </Typography>
                  <div>
                    <Button
                      sx={{
                        backgroundColor: "transparent",
                        color: colors.grey[100],
                        border: "1px solid #ffffff",
                        borderRadius:"20px",
                        mt: "30px",
                      }}
                      >
                      No
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: colors.greenAccent[500],
                        color: colors.grey[100],
                        borderRadius:"20px",
                        mt: "30px",
                        float: "right",
                      }}
                      >
                      Yes
                    </Button>
                  </div>
                </Box>
              </Modal>
            </div>
      </Box>
    </Box>
  );
};

export default Request;
