import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import RecipeDescription from './pages/recipeDescriptionPage';
import RecipeSearch from './pages/recipeSearchPage';
import RecipeEdit from './pages/recipeEditPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RecipeSearch />} />
          <Route path="/recipe/:cardId" element={<RecipeDescription />} />
          <Route path="/recipe/:cardId/edit" element={<RecipeEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
