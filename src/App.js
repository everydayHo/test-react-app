import React from 'react';
import './App.css';
import Subject from './components/Subject';
import Nav from './components/Nav';
import ReadArticle from './components/ReadArticle';
import Controll from './components/Controll';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/Updatecontent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'Welcom',
      selected_content_id: 2,
      subject: { title: 'Web', sub: 'Wolrd Wide Web' },
      Welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is Hypertext Markup Language' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'javascript', desc: 'JavaScript is for interactive' },
      ],
    };
  }
  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent() {
    let _title,
      _desc,
      _article = null;
    if (this.state.mode === 'Welcome') {
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
      _article = <ReadArticle title={_title} description={_desc}></ReadArticle>;
    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = (
        <ReadArticle
          title={_content.title}
          description={_content.desc}
        ></ReadArticle>
      );
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            let _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: _contents,
              mode: 'read',
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            let _contents = Array.from(this.state.contents);
            let i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i = i + 1;
            }
            this.setState({ contents: _contents, mode: 'read' });
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }
  render() {
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
        <Controll
          onChangeMode={function (_mode) {
            if (_mode === 'delete') {
              if (window.confirm('Are you sure?')) {
                let _contents = Array.from(this.state.contents);
                let i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode: 'Welcome',
                  contents: _contents,
                });
              }
            } else {
              this.setState({
                mode: _mode,
              });
            }
          }.bind(this)}
        ></Controll>
        {this.getContent()}
      </div>
    );
  }
}
export default App;
