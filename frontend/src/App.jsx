import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CatDetail from './pages/CatDetail';
import Quiz from './pages/Quiz';
import AddCat from './pages/AddCat';

function App() {
  return (
    /* One Parent Element ONLY */
    
    // "min-h-screen" makes it so the background will always be seen in the entire page, I think.
    <div className="min-h-screen bg-stone-100 text-stone-800">
      
      {/* Sample Navbar */}
      <Navbar />

      {/* Routes: If the URL path is that, the element (component) shown will be that */}
      <div className="p-6">
        <Routes>
          <Route path="/"        element={<Home />}      />
          <Route path="/cat/:id" element={<CatDetail />} />
          <Route path="/quiz"    element={<Quiz />}      />
          <Route path="/add"    element={<AddCat/>}     />
        </Routes>
      </div>

    </div>
  );
}

export default App;
