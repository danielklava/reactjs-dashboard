import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function mapDispatchToProps(dispatch) {
    return {
            getData: () => dispatch(getData())
    };
}

function mapStateToProps(state) {
    return {
        articles: state.remoteArticles.slice(0, 5)
    };
}

class Post extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // calling the new action creator
        this.props.getData();
    }

    render() {
        return (
            <List component="nav">
                {
                    this.props.articles.map(el => (
                        <ExpansionPanel key={el.id}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{el.title}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography paragraph>
                                {el.body}   
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    ))
                }
            </List>
        );
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);