// resources\js\components
import React, { Component } from 'react';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);

    // Bind the methods to the constructor
    this.editProject = this.editProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  }

  // To edit project details
  editProject(projectId) {
    axios.get('/api/projects/' + projectId)
    .then(response => {
      const projectDetails = response.data;

      // Set the project id in hidden field
      document.getElementById('project_id').value = projectId;
      document.getElementById('project_name').value = projectDetails.name;
      document.getElementById('project_desc').value = projectDetails.description;
    });
  }

  // To delete project
  deleteProject(projectId) {
    // Call the parent class method
    if( confirm('Are you sure?') )
    {
      this.props.func(projectId);
    }
  }

  render() {
    return (
      <div className='card-body'>
        <h3>Projects List</h3>
        <div className='list-group list-group-flush'>
          {/* Project listing is coming from parent component */}
          {	this.props.projects.map(project => (<div key={project.id}>{project.name} - {project.description} <a onClick={() => this.editProject(project.id)} href="javascript:void(0);">Edit</a> | <a onClick={() => this.deleteProject(project.id)} href="javascript:void(0);">Delete</a></div>)) }
        </div>
      </div>
    );
  }
}

export default ProjectList;
