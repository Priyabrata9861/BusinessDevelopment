import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Login from './Pages/login/login';
import Sidebar from './sidebar-component/sidebar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import User from './Pages/login/userManagement/userList';
import Dashboard from './Components/dashboard';
function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} ></Route>
          <Route element={<Sidebar/>}>
          <Route path="/dashboard" element={<Dashboard />} ></Route>
          <Route path="/user" element={<User />} ></Route>
          </Route>
          <Route/>
        </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
