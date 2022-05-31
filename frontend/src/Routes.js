import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Logon />} />
        <Route path="/" element={<Logon />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/incidents/new" element={<NewIncident />}></Route>
        {/* <Route path="*" component={<Logon />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
