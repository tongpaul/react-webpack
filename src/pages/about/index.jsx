import React from 'react'
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux'
import { initListActionSaga } from '../../store/actions/test'
const About = (props) => {
    return (
        <div id="about">
            这是个使用react,webpack,redux-saga搭建的模板
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.test,
    }
}
export default connect(
    mapStateToProps,
    initListActionSaga)(About)