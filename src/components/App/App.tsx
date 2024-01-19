import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import EditBook from "../../pages/EditBook";
import Layout from "../Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit-book/:id" element={<EditBook pageType="edit" />} />
          <Route path="/add-book" element={<EditBook pageType="create" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
