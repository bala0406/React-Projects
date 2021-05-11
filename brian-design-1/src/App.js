import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Signup from "./components/pages/Signup";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/Products" exact component={Products} />
                    <Route path="/Sign-up" exact component={Signup} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
