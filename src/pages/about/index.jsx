import React from 'react'
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux'
import { initListActionSaga } from '../../store/actions/test'
const About = (props) => {
    return (
        <div id="about">
            <Button variant="outlined" color="primary" onClick={() => props.initListSaga(props.list)}>
                查看列表
            </Button>
            <div className='list-box'>
                <List component="nav" aria-label="secondary mailbox folders">
                    {props.list.map((value) => (
                        <ListItem button key={value.name}>
                            <ListItemText primary={value.name} />
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
export default connect(
    mapStateToProps,
    initListActionSaga)(About)