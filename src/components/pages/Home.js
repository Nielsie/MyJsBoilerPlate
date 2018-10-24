import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Master from '../common/pageTemplates/Master';
import '../../App.css';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = {
    root: {
        flexGrow: 1,
        padding: '24px',
    },
};

const Home = withRouter((props) => {
    const {classes} = props;

    /*const OnStartGameClicked = () => {
        props.actions.startNewGame();
        props.history.push('/schoolgirlsim/new-game');
    };*/

    return (
        <Master title="Home Page">
            {/*<header>
                <nav>
                    <ul>
                        <li><Link to='/products/clothes'>Category</Link></li>
                        <li><Link to='/products/clothes/1234'>Single product</Link></li>
                    </ul>
                </nav>
            </header>*/}

            <div>
                HOME
            </div>


        </Master>
    );
});

Home.displayName = 'Home';
export default connect(null, null)(withStyles(styles)(Home));
