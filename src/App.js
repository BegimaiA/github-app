import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./views/MainPage";
import Home from "./views/Home";
import NotFound from "./components/NotFound";


function App() {
  return (
<Router>
 <Switch>
   <Route exact path="/">  <MainPage/> </Route>
   <Route exact path="/:login"> <Home/> </Route>
   <Route exact path="/:login/:repo">  <Home/> </Route>
   <Route exact path="*">  <NotFound/> </Route>
 </Switch>
</Router>
  );
}

export default App;
