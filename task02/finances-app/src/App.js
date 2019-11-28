import React, {Component} from 'react';
import AddArticleForm from './components/AddArticleForm/AddArticleForm';
import Article from "./components/Article/Article";

import List from './components/List/List';
import './App.css';

class App extends Component {
    state = {
      articles: [],
      currentArticle: '',
    };
  deleteArticle = (id) => {
    this.id = id;
    let oldArticles = [...this.state.articles];
    let articles = oldArticles.filter(article => article.id !== id);
    this.setState({articles: articles});
  };

  addArticle = () => {
    let article = {};
    article.text = this.state.currentArticle;
    let articles = [...this.state.articles];
    articles.push(article);
    this.setState({articles: articles});
  };

  render() {
    return (
        <div className="App">
          <AddArticleForm
              addArticle={this.addArticle}
              title={this.state.currentArticle}
          />
          {this.state && this.state.articles.map(article =>
              <Article
                  key={article.id}
                  id={article.id}
                  deleteArticle={this.deleteArticle}
                  title={article.text}
              />)}
          <List/>
        </div>
    );
  };
}
export default App;
