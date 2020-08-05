import React from 'react'
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux'
import { INIT_LIST_ITEM_SAGA } from '../../store/actions/test'
const About = (props) => {
    const handleGetList = () => {
        props.dispatch({
            type: INIT_LIST_ITEM_SAGA,
        })
    }
    return (
        <div id="about">
            <Button variant="outlined" color="primary" onClick={handleGetList}>
                查看列表
            </Button>
            <div className='list-box'>
                <List component="nav" aria-label="secondary mailbox folders">
                    {props.list.map((value) => (
                        <ListItem button key={value.title}>
                            <ListItemText primary={value.title} />
                        </ListItem>
                    ))}

                </List>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.test,
    }
}
const mappropsDispatch = dispatch => {
    return {
        dispatch: dispatch
    }
}
export default connect(
    mapStateToProps,
    mappropsDispatch)(About)