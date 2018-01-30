import React, { Component } from 'react';
import projects from './projects.json';

class App extends Component {
  state = {projects}
  render() {
    return (
      <ul>
        {this.state.projects.map(project => (
          <li key={project.link}>
            <a href={project.link}>
              <img src={project.image} alt=""/>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
