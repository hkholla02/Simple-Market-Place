import "./App.css";
import Header from "./components/Header";
import { Switch as Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./pages/Category";

function App() {
  return (
    <div className= "App">
      <Header />
      {/*Display all pages in this section*/}
      <main>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:category" component={Category} />
          <Route path="/product/:category/:id" component={Product} />
          <Route />
        </Routes>
      </main>
    </div>
  );
}

export default App;
