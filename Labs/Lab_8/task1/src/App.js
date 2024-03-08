import Catalog from "./components/Catalog";
import SortTable from "./components/SortTable";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/catalog">Каталог</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
            <Routes>
                <Route path="/" element={<SortTable />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
        </main>
      </Router>
  );
}

export default App;
