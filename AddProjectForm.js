// resources\js\components
import React, { Component } from 'react';

class AddProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        projectName: '',
        projectDesc: '',
        shown: false,
        displayText: '+'
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({projectName: event.target.value});
  }
  handleDescChange(event) {
    this.setState({projectDesc: event.target.value});
  }

  /* To save project */
  handleSubmit(event) {
    event.preventDefault();
    // console.log('Project name: ' + this.state.projectName + ' Project desc: ' + this.state.projectDesc);

    if( this.state.projectName == '' )
    {
      alert('Please enter project name');
      return false;
    }
    if( this.state.projectDesc == '' )
    {
      alert('Please enter project description');
      return false;
    }

    var self = this;
    axios.post('/api/projects', {
      name: this.state.projectName,
      description: this.state.projectDesc
    })
    .then(function (response) {
      if( response.statusText == 'OK' )
      {
        alert('Project added successfully');
        document.getElementById('frm_project').reset();

        // Call the parent component function
        self.props.func(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  toggle() {
		this.setState({
			shown: !this.state.shown,
      displayText: this.state.shown ? "+" : "-"
		});
	}

  render() {
    var shown = {
      display: this.state.shown ? "block" : "none"
    };

    return (
      <div className="container" style={{marginBottom:'20px'}}>
        <div style={{float:'left'}}><h3>Add Project</h3></div>
        <div style={{float:'right'}}>
          <button className="btn btn-primary" onClick={this.toggle.bind(this)}>{this.state.displayText}</button>
        </div>
        <div style={{clear: 'both'}}></div>
        <div style={ shown }>
          <form id="frm_project" className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Project Name:</label>
              <input type="text" className="form-control" onChange={this.handleNameChange} />
            </div>
            <div className="form-group">
              <label>Project Description:</label>
              <textarea className="form-control" onChange={this.handleDescChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProjectForm;
