import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./views/MainPage";
import RepoList from "./views/RepoList";
import Readme from "./views/Readme";
import Switch from "react-bootstrap/Switch";
import NotFound from "./components/NotFound";


function App() {
  return (
<Router>
 <Switch>
   <Route exact path="/">  <MainPage/> </Route>
   <Route exact path="/:login"> <RepoList/> </Route>
   <Route exact path="/:login/:repo">  <Readme/> </Route>
   <Route exact path="*">  <NotFound/> </Route>
 </Switch>
</Router>
  );
}

export default App;
