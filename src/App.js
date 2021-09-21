import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./views/MainPage";
import UserItem from "./views/UserItem";


function App() {
  return (
<Router>
  <Route exact path="/">  <MainPage/> </Route>
  <Route path="/:login">  <UserItem/> </Route>

</Router>
  );
}

export default App;
