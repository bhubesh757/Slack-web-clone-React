// import logo from './logo.svg';
import './App.css';
import Header from './Slack-clone/Header';
import Sidebar from './Slack-clone/Sidebar';

// Router dom
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Chat from './Slack-clone/Chat';
// import { useState } from 'react';
import Login from './Slack-clone/Login';
import { useStateValue } from './StateProvider';

function App() {

  // const [user, setuser] = useState(null)
  const [{user}, dispatch] = useStateValue();
  

  return (
    <div className="app">
      <Router>
        {!user ? (
          // <h1>Login page</h1>
          <Login></Login>
        ): (
          <>
      <Header></Header>
      <div className="app__body">
        <Sidebar></Sidebar>
        <Switch>
          <Route path = '/room/:roomId'>
            <Chat key='uniqueKey' ></Chat>
          </Route>
          <Route path = '/'>
            <h1> Welcome page</h1>
          </Route>
        </Switch>
      </div>
      </>

        )}
      </Router>
    </div>
  );
}

export default App;
