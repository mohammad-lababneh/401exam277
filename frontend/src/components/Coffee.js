import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'

export class Coffee extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>

                    <Card.Img variant="top" src={this.props.coffee.image} />
                    <Card.Body>
                        <Card.Title>{this.props.coffee.label}</Card.Title>
                        <ul>
                            {this.props.ingredientLines.map((ingredient, idx) => {

                                return (<li>{ingredient}</li>)
                            })}
                        </ul>
                        <Button variant="primary" onClick={() => this.props.addToFav(this.props.coffee)}>add to favoret</Button>
                    </Card.Body>


                </Card>
            </div>
        )
    }
}

export default Coffee
