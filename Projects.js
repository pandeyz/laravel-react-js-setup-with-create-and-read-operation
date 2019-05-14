// resources\js\components
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddProjectForm from './AddProjectForm';
import ProjectList from './ProjectList';

export default class Project extends Component {
    constructor(props) {
      super(props);
      this.state = {
          projects: [],
      };

      this.updateProjectList = this.updateProjectList.bind(this);
      this.deleteProject = this.deleteProject.bind(this);
      this.editProject = this.editProject.bind(this);
    }

    // To upadte the project list
    updateProjectList(project) {
        // Create a new array
        var updatedProjects = this.state.projects.concat(project);

        // Update the state
        this.setState({ projects: updatedProjects });
    }

    // To delete project
    deleteProject(projectId) {
      let projects = this.state.projects;
      let index = projects.findIndex(project => project.id === projectId);
      projects.splice(index, 1);

      // Delete the project from table
      axios.post('/api/projects/' + projectId, {
        name: this.state.projectName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      // Set the state
      this.setState({ projects });
    }

    // To edit project details
    editProject(projectId) {
      console.log('Parent edit project: ' + projectId);
    }

    componentDidMount() {
        // Get the listing of projects on component loading
        axios.get('/api/projects')
        .then(response => {
          const projects = response.data;
          this.setState({ projects });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center" style={{marginTop:'20px'}}>
                    <div className="col-md-12">
                        <div className="card" style={{paddingTop:'20px'}}>
                          {/* Function call to get the lastest added project */}
                          <AddProjectForm func={this.updateProjectList}></AddProjectForm>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                          {/* Pass the project listing to child component  */}
                        	<ProjectList func={this.deleteProject} projects={this.state.projects}></ProjectList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Project />, document.getElementById('app'));
}
