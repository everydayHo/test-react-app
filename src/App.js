import React from 'react';
import './App.css';
import Subject from './components/Subject';
import Nav from './components/Nav';
import Article from './components/Article';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: { title: 'Web', sub: 'Wolrd Wide Web' },
      Welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is Hypertext Markup Language' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'HTML', desc: 'JavaScript is for interactive' },
      ],
    };
  }
  render() {
    let _title,
      _desc = null;
    if (this.state.mode === 'Welcome') {
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
    } else if (this.state.mode === 'read') {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'Welcome' });
          }.bind(this)}
        ></Subject>

        <Nav
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></Nav>
        <Article title={_title} description={_desc}></Article>
      </div>
    );
  }
}
export default App;
