import React, {Component} from "react";
import Vivod from '../component/vivod';
import { connect } from 'react-redux';
import {TextAdd} from './infaAction'

class vivodContainer extends Component {
    render() {
        return <Vivod text={this.props.text}/>
    }
}
const mapStateToProps = (state) => {
    return {
        text: state.infaReducer.text
    }   
}

export default connect(mapStateToProps)(vivodContainer);