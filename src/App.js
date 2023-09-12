

import Navbar from './Navbar'
import Home from './Home'
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className='content'>
          {/* navbar is always going to show since not inside the switch */}
          <Switch>
            {/* show the home component when the url is / */}
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>


  );
}

export default App;
