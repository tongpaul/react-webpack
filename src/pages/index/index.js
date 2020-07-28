import React, { Component } from 'react';
import { Button, Card} from '@material-ui/core'
import './style.scss'
export default class Index extends Component {

    render() {
        return (
            <div className='index'>
                <div className='card'>
                    <Card >
                        <div>hello world</div>
                        <Button size="large">button</Button>
                    </Card>
                </div>
                <Button variant="contained" color="primary" >关于</Button>
            </div>
        )
    }
}
