// resources\js\components
import React, { Component } from 'react';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='card-body'>
        <h3>Projects List</h3>
        <ul className='list-group list-group-flush'>
          {/* Project listing is coming from parent component */}
          {	this.props.projects.map(project => (<span key={project.id}>{project.name} - {project.description}</span>)) }
        </ul>
      </div>
    );
  }
}

export default ProjectList;
