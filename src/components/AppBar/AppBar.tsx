import { NavLink } from 'react-router-dom';

function AppBar() {
  return (
    <>
      <div>AppBar</div>
      <NavLink to="/add-book">Create book</NavLink>
      <NavLink to="/">Dashboard</NavLink>
    </>
  );
}

export default AppBar
