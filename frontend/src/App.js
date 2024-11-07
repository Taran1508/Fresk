import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import GroceryBook from './pages/grocery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Fresk/" element={<Welcome/>} />
        <Route path="/Fresk/grocery" element={<GroceryBook/>} />
       {/* <Route path="/medicine" element={<MedicineBook />} />
        <Route path="/recipe" element={<RecipeBook />} />
        <Route path="/community" element={<Community />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
