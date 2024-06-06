import { Box, IconButton, InputBase, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { ColorModeContext, tokens } from '../../../components/components/Theme';
import { SearchIcon } from '@mui/icons-material/Search';
import { DarkModeOutlined, LightModeOutlined, NotificationsOutlined, Search, SettingsOutlined, SupervisorAccountTwoTone } from '@mui/icons-material';


export default function TopBar() {

  const theme = useTheme("");
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleNotification = () => {
    console.log("Logging");
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search here">
          <IconButton type="button" sx={{ p: 1 }}>
            <Search />
          </IconButton>
        </InputBase>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined onClick={handleNotification} />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <SupervisorAccountTwoTone />
        </IconButton>
      </Box>
    </Box>
  )
}
