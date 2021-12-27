
import styles from "./components/App.module.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { Header, HeaderInput } from "./components/Header";


export function Principal() {
    return (
        <Router>
            <header className={styles.header}>
                <div><Link to="/"> <Header /> </Link> </div> 
                <div>< HeaderInput/></div>
            </header>
            <main>
                <Switch> 
                    <Route exact path="/movies/:movieid"> 
                        <MovieDetails />
                    </Route>
                    <Route path="/"> 
                        <LandingPage />  
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}