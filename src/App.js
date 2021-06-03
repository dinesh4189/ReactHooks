import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import StudentList from "./components/studentList";
import DoToList from "./components/doToList";
import AnimalsApiList from "./components/animalsList";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Dashboard</h1>
        <div className="RouteLinks">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/studentList">Student List</Link>
          </span>
          <span>
            <Link to="/doToList">Do To List</Link>
          </span>
          <span>
            <Link to="/animalsApi">Animals API List</Link>
          </span>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/studentList" component={StudentList} />
          <Route exact path="/doToList" component={DoToList} />
          <Route path="/animalsApi">
            <AnimalsApiList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
