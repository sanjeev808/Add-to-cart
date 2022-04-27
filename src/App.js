import './App.css';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Cards from './component/Cards.jsx'
import CardsDetail from './component/CardsDetail';


export  default function App () {
  return (
    <>
  <div>
<BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/cart/:id" element={<CardsDetail />} />
    </Routes>
</BrowserRouter>
</div>
    </>
  );
}


