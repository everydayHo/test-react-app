import React from 'react';
import '../App.css';

class Subject extends React.Component {
  render() {
    return (
      <header>
        <h1 className="title">
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        <div className="sub">{this.props.sub}</div>
      </header>
    );
  }
}
export default Subject;
