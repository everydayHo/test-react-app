import React from 'react';
import '../App.css';

class Article extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.description}
      </article>
    );
  }
}
export default Article;
