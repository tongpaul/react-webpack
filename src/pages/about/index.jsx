import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { initListActionSaga } from '../../store/actions/test'

const About = (props) => {
    return (
        <div id="about">
            <Button variant="outlined" color="primary" onClick={props.initListSaga}>
                打开提示窗
            </Button>
            {props.detail.map((value)=>(
                <div key={value}>{value}</div>
            ))}
        </div>
    )
}

const mapStateToProps = state => { return { detail: state.test } }
export default connect(
    mapStateToProps,
    initListActionSaga)(About)