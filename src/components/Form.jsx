// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle, clearArticles } from "../actions/index";
import { TextField, Button, Snackbar, SnackbarContent } from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';

const mapStateToProps = state => {
    return { msgFoundBadWord : state.mapStateToProps };
}

function mapDispatchToProps(dispatch) {
    return {
        addArticle : article => dispatch(addArticle(article)),
        clearArticles : () => dispatch(clearArticles())
    };
}

class ArticleForm extends React.Component {
    constructor(){
        super();

        this.state = {
            title : ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({title, id});
        this.setState( { title : "" });
    }

    handleSubmitClear(event){
        event.preventDefault();
        this.props.clearArticles();
    }

    render (){
        const { title, msgFoundBadWord } = this.state;

        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <TextField
                            id="title"
                            label="Title"
                            value={title}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            id="content"
                            label="Content"
                            type="text"
                            multiline={true}
                            rows={5}
                        />
                    </FormGroup>
                    <FormGroup >
                        <Button variant="contained"
                            color="primary"
                            type="submit"
                            value="SEND"
                        >
                            SEND
                        </Button>
                        <Button variant="contained"
                            color="secondary"
                            type="submit"
                            value="CLEAR"
                            onClick={this.handleSubmitClear.bind(this)}
                        >
                            CLEAR
                        </Button>
                    </FormGroup>
                </form>
                <Snackbar 
                    anchorOrigin={{
                        vertical : 'bottom',
                        horizontal : 'left'
                    }}
                    open={this.state.msgFoundBadWord}
                    autoHideDuration={6000}
                >
                    <SnackbarContent message="Mensagem proibida!" />
                </Snackbar>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);