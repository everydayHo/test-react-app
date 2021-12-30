import React from 'react';
import '../App.css';

class CreateContent extends React.Component {
  render() {
    return (
      <article>
        <h2>create</h2>
        <form
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input
              className="titleBtn"
              type="text"
              name="title"
              placeholder="title"
            ></input>
          </p>
          <p>
            <textarea
              className="titleDesc"
              name="desc"
              placeholder="description"
            ></textarea>
          </p>
          <p>
            <input className="title-submit" type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}
export default CreateContent;
