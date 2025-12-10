import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CatDetail from './pages/CatDetail';

function App() {
  return (
    
    // "min-h-screen" makes it so the background will always be seen in the entire page, I think.
    <div className="min-h-screen bg-stone-100 text-stone-800">
      
      {/* Sample Navbar */}
      <nav className="p-4 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto font-bold text-xl tracking-tighter">
          🦁 BigCats<span className="text-orange-600">Wiki</span>
        </div>
      </nav>

      {/* Routes: If the URL path is that, the element (component) shown will be that */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<CatDetail />} />
        </Routes>
      </div>

    </div>

    /* The site doesn't show anything for some reason. */
  );
}

export default App;
