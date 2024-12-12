import * as React from 'react';
import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';
import Popover from '@mui/material/Popover';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Badge from '@mui/material/Badge';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const active = open ? "active" : undefined;

  const Item = ({ data, date}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Box
        style={{
          color: colors.grey[100],
          padding: "0 20px",
          backgroundColor:"#1e1e1e",
          margin: "16px",
          borderRadius: "6px",
        }}
      >
        <Box display="flex" justifyContent="space-between" pt={2} pb={2} pl={0} pr={0}>
          <img
            alt="profile-user"
            width="50px"
            height="40px"
            src={`../../assets/user.png`}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
          <Box display="block" ml="10px">
            <Typography>{data}</Typography>
            <Typography
              color="#5f6879"
              mt="5px">
              {date}
              </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box display="flex" justifyContent="space-between" p="24px" borderBottom="1px solid #252525">
      {/* ICONS */}
      <Box display="flex">
        <Typography variant="h4" color={colors.grey[100]}>
            Menumiz HR
        </Typography>
      </Box>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        sx={{
          "& .MuiIconButton-root:hover": {
                backgroundColor: "#726ee0",
              },
              ".active": {
                backgroundColor: "#726ee0",
              },
              
            }}
          >

        <IconButton type="button"
          sx={{
            p: 1, mr: -7, zIndex: 1, color:"#878787"
            }}
          >
          <SearchIcon />
        </IconButton>
        <InputBase
        sx={{ ml: 2, flex: 1, pl: 5, pr: 2 }}
        style={{
          backgroundColor:"#1e1e1e",
          borderRadius:"20px",
        }}
        placeholder="Enter any keyword.."
        />
        <IconButton>
          <TuneIcon />
        </IconButton>
        <IconButton aria-describedby={id} className={active} variant="contained" onClick={handleClick}>
          <Badge
          color="secondary"
          badgeContent=" "
          variant="dot" 
          sx={{
            ".MuiBadge-badge": {
                backgroundColor:"#ffda3e",
                mt:"6px",
                mr:"6px"
              },
          }}
          >
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
          <Popover
            id={id}
            open={open}
            className={active}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box display="flex" justifyContent="space-between" sx={{ backgroundImage: "none", backgroundColor: "#151515"}} >
              <Typography
              variant="h2"
              color={colors.grey[100]}
              p="20px 0 0 20px"
              >
                Notifications
            </Typography>

            <FormGroup style={{
              flexDirection:"column-reverse",
            }}
            >
              <FormControlLabel control={<Checkbox defaultChecked />} label="Mark as read"
              sx={{ 
                ".MuiButtonBase-root": {
                    order: "2",
                  },
                  ".MuiTypography-root": {
                    order: "1",
                  },
                  ".MuiSvgIcon-root": {
                    fill: "#b9b9b9",
                  },
               }}
              />
            </FormGroup>
            </Box>

          <Box sx={{ p: 2, backgroundImage: "none", backgroundColor: "#151515" }}>
            <Typography position="relative">
              <Badge
                color="secondary"
                badgeContent=" "
                variant="dot" 
                sx={{
                  ".MuiBadge-badge": {
                      backgroundColor:"#ffda3e",
                      mt:"6px",
                      mr:"6px",
                      position: "absolute",
                      right: "96%",
                      top: "30px"
                    },
                }}
                >
                <Item
                  data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget."
                  date="Today at 08:35 PM"
                />
              </Badge>
            </Typography>

            <Typography position="relative">
              <Badge
                color="secondary"
                badgeContent=" "
                variant="dot" 
                sx={{
                  ".MuiBadge-badge": {
                      backgroundColor:"#ffda3e",
                      mt:"6px",
                      mr:"6px",
                      position: "absolute",
                      right: "96%",
                      top: "30px"
                    },
                }}
                >
                <Item
                  data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget."
                  date="Today at 08:35 PM"
                />
              </Badge>
            </Typography>

            <Typography position="relative">
              <Badge
                color="secondary"
                badgeContent=" "
                variant="dot" 
                sx={{
                  ".MuiBadge-badge": {
                      backgroundColor:"#ffda3e",
                      mt:"6px",
                      mr:"6px",
                      position: "absolute",
                      right: "96%",
                      top: "30px"
                    },
                }}
                >
                <Item
                  data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget."
                  date="Today at 08:35 PM"
                />
              </Badge>
            </Typography>

            <Typography position="relative">
                <Item
                  data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget."
                  date="Today at 08:35 PM"
                />
            </Typography>

            <Typography position="relative">
                <Item
                  data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget."
                  date="Today at 08:35 PM"
                />
            </Typography>
          </Box>
          </Popover>
        <img
          alt="profile-user"
          width="50px"
          height="40px"
          src={`../../assets/user.png`}
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />
      </Box>
    </Box>
  );
};

export default Topbar;
