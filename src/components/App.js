import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ArticleList from './ArticleList.jsx';
import Typography from '@material-ui/core/Typography';
import { CssBaseline, Divider, Card, CardContent, AppBar, Toolbar, Grid } from '@material-ui/core';
import ArticleForm from './Form.jsx';
import Post from './Post.jsx';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  card : {
    margin: 10
  }
});

function App(props){
  const { classes } = props;
  
  return (
    <div>
      <CssBaseline />
      <AppBar
          position="relative"
        >
          <Toolbar disableGutters={!open}>
              <Typography variant="h6" color="inherit" noWrap>
                  Article Form
              </Typography>
          </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <ArticleForm />
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h3">
                Articles  
              </Typography>
              <Divider />
              <ArticleList />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
            <Post />
        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);