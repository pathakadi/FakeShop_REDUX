import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import './App.css';
import { Header , ProductComponent , ProductDetail , ProductListing } from "./containers";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<ProductListing/>}/>
          <Route path="/product/:productId" exact element={<ProductDetail/>}/>
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
