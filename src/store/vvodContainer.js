import React, {Component} from "react";
import Vvod from '../component/vvod';
import { connect } from 'react-redux';
import {TextAdd} from './infaAction'

class vvodContainer extends Component {
    render() {
        return <Vvod text={this.props.text} txtAdd={this.props.TextAdd}/>
    }
}
const mapStateToProps = (state) => {
    return {
        text: state.infaReducer.text
    }   
}
const mapDispatchToProps = {
    TextAdd
}
export default connect(mapStateToProps, mapDispatchToProps)(vvodContainer);