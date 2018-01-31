import React from 'react';
import {Filters} from './Filters';
import {connect} from 'react-redux';
import {changeVisibility} from '../Containers/Actions';

const Foot = (props) => (<div> Count : 4 &nbsp;&nbsp;&nbsp; <Filters  {...props}/> &nbsp;&nbsp;&nbsp; Shanmukh  </div>);


const mapStatetoProps = state => {
console.log(state.currentFilter);
    return {filter : state.currentFilter};
}

const mapDispatchtoProps = dispatch => {
    return {handler : filter => dispatch(changeVisibility(filter))};
}

export const Footer = connect(mapStatetoProps,mapDispatchtoProps)(Foot) ;
