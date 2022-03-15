import './App.css';
import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";
import ArtListingForm from './components/ArtListingForm';
import { createBrowserHistory } from "history";
import MainPage from './components/MainPage';

// Color pallet
// https://colorhunt.co/palette/c0d8c0f5eedcdd4a48ecb390

// MET homepage
// https://www.metmuseum.org/

// Enable Browser History for Back and Forward Button
export const appHistory = createBrowserHistory();

function App() {

  return (
    // <div className="App">
    //   <ArtListingForm></ArtListingForm>
    // </div>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<ArtListingForm />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
