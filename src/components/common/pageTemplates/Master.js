import React from 'react';
import PropTypes from 'prop-types';
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Master = (props) => {
    const footerHeight = 0;
    const styles = {
        main: {
            paddingBottom: footerHeight,
        },
        footer: {
            position: 'absolute',
            right: 0,
            bottom: 0,
            left: 0,
            height: footerHeight,
        }
    };

    return (
        <div>
            <Header title={props.title}/>
            <div style={styles.main}>
                {props.children}
            </div>
            <div style={styles.footer}>
                <Footer/>
            </div>
        </div>
    );
};

Master.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
Master.displayName = 'Master';
export default Master;