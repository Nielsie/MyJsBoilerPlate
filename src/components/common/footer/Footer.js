import React from 'react';
import PropTypes from 'prop-types';
import { indigo } from 'material-ui/colors';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

const styles = {
    root: {
        width: '100%',
        height: '100%',
    },
    topFooter: {
        height: '20%',
        background: indigo[300],
    },
    bottomFooter: {
        height: '80%',
        background: indigo[500],
    },
};

function Footer(props) {
    const classes = props.classes;
    return (
        <div className={classes.root}>
            <Paper square className={classes.topFooter}>
            </Paper>
            <Paper square className={classes.bottomFooter}>
            </Paper>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};
Footer.displayName = 'Footer';
export default withStyles(styles)(Footer);