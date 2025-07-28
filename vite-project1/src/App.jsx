import {Routes,Route,Link}from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import User from './pages/User';
import Services from './pages/Services';
import MyComponent from './components/MyComponent';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import Animations from './components/Animations';
import UserProfile from './UserProfile';
// function App(){
//   return(
    // <div>

   
const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error fetching users: {error.message}</p>;

  return (
    <>
    <div style={{ padding: '2rem' }}>
      <h2>User Directory</h2>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
      {/* <Animations/> */}
    </div>
     <ProtectedUserProfile isAuthenticated={true}/>
     </>
  );
};

//          <MyComponent/>
//       <h1>React Router Demo</h1>
//       <nav style={{marginBottom:20}}>
//         <Link to="/"style={{marginRight:10}}>Home</Link>
//         <Link to="/AboutUs"style={{marginRight:10}}>AboutUs</Link>
//         <Link to="/ContactUs"style={{marginRight:10}}>ContactUs</Link>
//         <Link to="/User"style={{marginRight:10}}>User</Link>
//         <Link to="/Services"style={{margin:10}}>Services</Link>
//       </nav>

//       <Routes>
//         <Route path="/"element={<Home/>}/>
//         <Route path="/AboutUs"element={<AboutUs/>}/>
//         <Route path ="/ContactUs"element={<ContactUs/>}/>
//         <Route path="/User/:id"element={<User/>}/>
//         <Route path="/Services"element={<Services/>}/>
//       </Routes>
   
//     </div>
//   );
// }
export default App;
