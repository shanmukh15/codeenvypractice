import React, {Component} from 'react';
import Filters from './Filters';
import {connect} from 'react-redux';
import 
class Footer extends Component {
    render() {
        return(
            <div>Count : 4 &nbsp;&nbsp;&nbsp; <Filters /> &nbsp;&nbsp;&nbsp; Shanmukh  </div>);
    }
}


const mapStatetoProps = state => {
    return {filter : state.currentFilter};
}

const mapStatetoProps = dispatch => {
    return dispatch();
}

export const Footer = connect(mapStatetoProps,mapDispatchtoProps)(Footer) ;

