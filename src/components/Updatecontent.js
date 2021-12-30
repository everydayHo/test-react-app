import React from 'react';
import '../App.css';

class UpdateContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <article>
        <h2>update</h2>
        <form
          onSubmit={function (e) {
            console.log(e);
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind(this)}
        >
          <input type="hidden" value={this.state.id}></input>
          <p>
            <input
              className="titleBtn"
              name="title"
              type="text"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
            ></input>
          </p>
          <p>
            <textarea
              className="titleDesc"
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHandler}
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
export default UpdateContent;
