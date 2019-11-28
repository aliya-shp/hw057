import React, {Component} from 'react';

import './AddArticleForm.css';

const AddArticleForm = (props) => {
    return (
        <div>
            <form>
                <input className="add-article-input" type="text" value={props.title} name="article" placeholder="Item name" />
                <input className="add-amount-input" type="text" value={props.amount} name="article" placeholder="Cost" />
                <strong>KGS</strong>
                <button type="button" onClick={()=>props.addArticle()}>Add</button>
            </form>
        </div>
    );
};


export default AddArticleForm;