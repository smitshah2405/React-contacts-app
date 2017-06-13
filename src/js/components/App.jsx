import React from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home.jsx';
import Contacts from './Contacts.jsx';
import About from './About.jsx';
import AddContact from './AddContact.jsx';
import EditContact from './EditContact.jsx';
import Portfolio from './Portfolio.jsx';

export default class App extends React.Component {
  render() {
    return (
    	<Router>
		    <div>
		      <ul>
		        <li><Link to="/">Home</Link></li>
		        <li><Link to="/contacts">Contacts</Link></li>
		        <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>		        
		      </ul>

		      <hr/>

		      <Route exact path='/' component={Home} />
        	  <Route path='/contacts' component={Contacts} />
        	  <Route path='/about' component={About} />
        	  <Route path='/add' component={AddContact} />
        	  <Route path={`/edit/:cid`} component={EditContact} />
            <Route path='/portfolio' component={Portfolio} />
		    </div>
		  </Router>
    	
      );
  }
};



/**

      	**/