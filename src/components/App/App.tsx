import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import EditBook from "../../pages/EditBook";
import CreateBook from "../../pages/CreateBook";
import Layout from "../Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
        <Route path="/add-book" element={<CreateBook />} />
      </Route>
    </Routes>
  );
}

export default App;
