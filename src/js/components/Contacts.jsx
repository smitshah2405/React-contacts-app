import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

class Contacts extends React.Component {

	 constructor(props) {
	   super(props);
	 
	   this.state = {"contactList":[]};
	   this.deleteContact = this.deleteContact.bind(this);
	 }

	componentDidMount() {
		console.log("Just mounted...");
	    axios.get('/contactsList')
	      .then(res => {
	      	console.log("response="+JSON.stringify(res));
	        this.setState(res.data);
	      });
	}

	deleteContact(e){
		e.preventDefault();
		console.log("cid="+e.target.name);
		axios.post('/deleteContact', {id: e.target.name})
    		.then(res => {
	      	console.log("response="+JSON.stringify(res));
	        this.setState(res.data);
	        
	      });
	}

   render() {
    return (     
        <div className="container">
        	<span><Link to="/add">Add</Link></span>	
        	<div className="row">
        		<div className="col-md-2">First Name </div>
        		<div className="col-md-2">Last Name </div>
        		<div className="col-md-2">Email </div>
        		<div className="col-md-2">Home Phone </div>
        		<div className="col-md-2">Work Phone </div>
        		<div className="col-md-2">Actions </div>
        	</div>
<br/>
        	{this.state.contactList.map((contact)=> {
        		return (
            	<div className="row">
	        		<div className="col-md-2"> {contact.firstName}-{contact.id} </div>
	        		<div className="col-md-2"> {contact.lastName}</div>
	        		<div className="col-md-2"> {contact.email}</div>
	        		<div className="col-md-2"> {contact.phone}</div>
	        		<div className="col-md-2"> {contact.work}</div>
	        		<div className="col-md-2"> <Link to={`/edit/${contact.id}`}>Edit</Link>
	        			    &nbsp;<a href="#" name={`${contact.id}`} onClick={(e) => this.deleteContact(e)}>
        						Delete
      						</a>
	        		</div>
	        	</div>
	        	);
        	})}
        </div>
      );
  }
}

module.exports = Contacts;