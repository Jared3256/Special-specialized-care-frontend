import { useState } from 'react'
import {ColorModeContext, useMode } from "./components/components/Theme"
import { CssBaseline, ThemeProvider } from '@mui/material'
import Sidebar from './scenes/global/sidebar'
import { Outlet } from 'react-router-dom'
import TopBar from './scenes/global/Topbar'

function App( {accessLevel}) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar isSidebar={isSidebar} accessLevel={accessLevel}/>
          <main className='content'>
            <TopBar setIsSidebar={setIsSidebar}/>
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
