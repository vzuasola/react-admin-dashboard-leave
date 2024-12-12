import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import WindowIcon from '@mui/icons-material/Window';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TvIcon from '@mui/icons-material/Tv';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AssessmentIcon from '@mui/icons-material/Assessment';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}

      style={{
        color: colors.grey[100],
      }}

      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -120,
    top: 5,
    backgroundColor: "#ffda3e !important",
    color: "#000000",
  },
}));

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#ffda3e !important",
        },
        "& .pro-menu-item.active": {
          color: "#ffffff !important",
          background: `${colors.greenAccent[500]} !important`,
          borderRadius: "0 20px 20px 0",
        },
        "& .pro-menu-item.active .pro-item-content": {
          color: "#e0e0e0 !important",
        },
        "& .css-1l8icbj": {
          borderTop: "1.5px solid",
          borderRight:"1.5px solid",
          borderColor:"#222222",
          pr: "20px",
        },

      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  HRHR
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<WindowIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Calendar"
              to="/"
              icon={<CalendarMonthIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Recruitment"
              to="/"
              icon={
                <icon aria-label="recruitment">
                <StyledBadge badgeContent={10} color="secondary">
                  <PeopleAltIcon />
                </StyledBadge>
              </icon>}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Employee"
              to="/"
              icon={<PersonIcon />}
              selected={selected}
              setSelected={setSelected}
            />

              <Item
                title="Leave"
                to="/"
                icon={<AccessTimeIcon />}
                
                selected={selected}
                setSelected={setSelected}
              />

            <Item
              title="Organisation"
              to="/"
              icon={<AccountTreeIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Bills"
              to="/"
              icon={<AttachMoneyIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Engagement"
              to="/"
              icon={<LiveHelpIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Development"
              to="/"
              icon={<TvIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Performance"
              to="/"
              icon={<WorkspacePremiumIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Reports"
              to="/"
              icon={<AssessmentIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
