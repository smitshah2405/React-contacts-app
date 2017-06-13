import React from 'react';
import axios from 'axios';

class EditContact extends React.Component {
 constructor(props) {
 	console.log("edit contact started..."+JSON.stringify(props));
    super(props);
    this.state = {
      "firstName" : "",
      "lastName" : "",
      "email" : "",
      "phone" : "",
      "work" : "",
      "id":""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  	console.log("componentDidMount..."+JSON.stringify(this.props));
    
		console.log("Just mounted..."+this.props.match.params.cid);
	    axios.get('/getContact?id='+this.props.match.params.cid)
	      .then(res => {
	      	console.log("response="+JSON.stringify(res));
	        this.setState(res.data);
	      });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('An firstname was submitted: ' + this.state.firstName);
    event.preventDefault();
    //use axios and post
    axios.post('/updateContact', this.state)
    .then(res => {
	      	console.log("response="+JSON.stringify(res));
	        //go to contacts page
	        this.props.history.push("/contacts");
	      });
  }

  render() {
    return ( 

        <div className="container">
		  <h2>Update Contact </h2>
		  <form className="form-horizontal" onSubmit={this.handleSubmit}>
		    <div className="form-group">
		      <label className="control-label col-sm-2" for="firstName">First Name:</label>
		      <div className="col-sm-10">
		        <input onChange={this.handleChange} type="text" className="form-control" id="firstName" placeholder="Enter First Name" name="firstName" value={this.state.firstName}/>
		      </div>
		    </div>
		    <div className="form-group">
		      <label className="control-label col-sm-2" for="lastName">Last Name:</label>
		      <div className="col-sm-10">          
		        <input onChange={this.handleChange} type="text" className="form-control" id="lastName" placeholder="Enter Last Name" name="lastName" value={this.state.lastName}/>
		      </div>
		    </div>
		    <div className="form-group">
		      <label className="control-label col-sm-2" for="email">Email:</label>
		      <div className="col-sm-10">
		        <input onChange={this.handleChange} type="text" className="form-control" id="email" placeholder="Enter Email" name="email" value={this.state.email}/>
		      </div>
		    </div>
		    <div className="form-group">
		      <label className="control-label col-sm-2" for="phone">Phone:</label>
		      <div className="col-sm-10">
		        <input onChange={this.handleChange} type="text" className="form-control" id="phone" placeholder="Enter Phone Number" name="phone" value={this.state.phone}/>
		      </div>
		    </div>
		    <div className="form-group">
		      <label className="control-label col-sm-2" for="work">Work Number:</label>
		      <div className="col-sm-10">
		        <input onChange={this.handleChange} type="text" className="form-control" id="work" placeholder="Enter Work Number" name="work" value={this.state.work}/>
		      </div>
		    </div>
		    <div className="form-group">        
		      <div className="col-sm-offset-2 col-sm-10">
		        <button type="submit" className="btn btn-default">Submit</button>
		      </div>
		    </div>
		  </form>
		</div>
      );
  }
}

module.exports = EditContact;