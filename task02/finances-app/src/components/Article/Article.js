import React, {Component} from 'react';
import './Article.css';

const Article = (props) => {
    return (
        <div>
            {props.title}
            <button onClick={() => props.deleteArticle(props.id)}>Delete</button>
        </div>
    );
};

export default Article;
