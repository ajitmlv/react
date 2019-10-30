import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import PetsDataService from './../service/PetsDataService'
import './../App.css';

class ListPets extends Component{

    constructor(props) {
        super(props)
        this.state = {
            pets: [],
            message: null
        }
        this.refreshPets = this.refreshPets.bind(this)
    }

    componentDidMount() {
        this.refreshPets();
    }

    refreshPets() {
        PetsDataService.retrieveAllPets()
            .then(
                response => {
                    console.log(response);
                    this.setState({ pets: response.data })
                }
            )
    }
    render(){

        return(
            <div >
                <h3>All Pets</h3>
                <div>
         
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>name</th>
                                <th>breed</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.pets.map(
                                    pets =>
                                        <tr key={pets._id}>
                                            <td>{pets._id}</td>
                                            <td>{pets.name}</td>
                                            <td>{pets.breed}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    
                </div>
            </div>
        )
    }
}

export default ListPets