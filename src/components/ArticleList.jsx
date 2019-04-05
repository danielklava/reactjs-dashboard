import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { connect } from 'react-redux';
import DoneIcon from '@material-ui/icons/Done';

const mapStateToProps = state => {
    return { articles : state.articles };
}

const ConnectedList = ({ articles }) => (
    <div>
        <List component="nav">
            {
                articles.map(el => (
                    <ListItem  key={el.id}>
                        <ListItemIcon>
                            <DoneIcon />
                        </ListItemIcon>
                        <ListItemText primary={el.title}/>   
                    </ListItem>
                ))
            }
        </List>

    </div>
);

const ArticleList = connect(mapStateToProps)(ConnectedList);

export default ArticleList;