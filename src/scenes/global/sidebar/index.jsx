import {  Box, IconButton, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { tokens } from '../../../components/components/Theme';
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { CalendarTodayOutlined, Diversity3TwoTone, EarbudsTwoTone, HomeOutlined, HowToRegTwoTone, LocalHospitalTwoTone, MenuOutlined, PeopleOutlined, ReceiptOutlined, VolunteerActivism, VolunteerActivismSharp, VolunteerActivismTwoTone } from '@mui/icons-material';
import "react-pro-sidebar/dist/css/styles.css";
import user from "../../../assets/user.png";


// This is a sub component of the sidebar
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>
        {title}
      </Typography>
      <Link to={to}/>
    </MenuItem>
  );
}

export default function Sidebar({accessLevel}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
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
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
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
                  {accessLevel}
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {
            !isCollapsed && (
              <Box mb="25">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={user}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>

                <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Jared O.
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                {accessLevel}
                </Typography>
              </Box>
            </Box>
            )
          }

          <Box mt="10px" paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/info/dashboard"
              icon={<HomeOutlined/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="calendar"
              to="/info/calendar"
              icon={<CalendarTodayOutlined/>}
              selected={selected}
              setSelected={setSelected}
            />

            {accessLevel === "Admin V" ? (
              <>
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Data
                </Typography>

                <Item
                  title="Manage Team"
                  to="/info/team"
                  icon={<PeopleOutlined />}
                  selected={selected}
                  setSelected={setSelected}
                />
                {/* <Item
                  title="Invoices Balances"
                  to="/info/invoices"
                  icon={<ReceiptOutlined />}
                  selected={selected}
                  setSelected={setSelected}
                /> */}
              </>
            ) : (undefined)}
            
            {/* Clinical Management Section */}
            <Typography
               variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Facility Management
            </Typography>
            
            <Item
              title="Hospital"
              to="/info/hospital"
              icon={<LocalHospitalTwoTone />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Clinical Management"
              to="/info/clinical_management"
              icon={<VolunteerActivismSharp />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Diagnosis"}
              to={"/info/diagnosis"}
              icon={<EarbudsTwoTone />}
              selected={selected}
              setSelected={setSelected}
            />
            
            {/* Patient Management Section */}
            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Patient
            </Typography>

            <Item
              title="Patient Registration"
              to="/info/patient_reg"
              icon={<VolunteerActivism />}
              selected={selected}
              setSelected={setSelected}
            /> */}


             {/* Health officials Management Section */}
            {/*<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Health Official
            </Typography>
             <Item
              title="Nurse Station"
              to="/info/doc/nurse"
              icon={<EarbudsTwoTone />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Discharge Summary"
              to="/info/discharge"
              icon={<HowToRegTwoTone />}
              selected={selected}
              setSelected={setSelected}
            /> */}


            {/* Communty Unit Management Section */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Community Unit
            </Typography>
            <Item
              title="Community Units"
              to="/info/community_unit"
              icon={<Diversity3TwoTone />}
              selected={selected}
              setSelected={setSelected}
            /> 
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}
