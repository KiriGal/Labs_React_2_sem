import Catalog from "./components/Catalog";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <div className="App">
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
                        <li><Link to="/basket/list">Корзина</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Catalog />}/>
                    <Route path="/catalog" element={<Catalog />}/>
                    <Route path="/basket/list" element={<OrderForm />}></Route>
                </Routes>
            </main>
        </Router>
    </div>
  );
}

export default App;
