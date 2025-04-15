import { Route, Routes } from 'react-router-dom';
import Signup from './pages/UserPages/Signup';
import Signin from './pages/UserPages/Signin';
import Dashborad from './pages/UserPages/Dashborad';
import AddTask from './pages/UserPages/AddTask';
import EditTask from './pages/UserPages/EditTask';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Dashborad />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
      </Routes>
    </>
  );
};

export default App;
