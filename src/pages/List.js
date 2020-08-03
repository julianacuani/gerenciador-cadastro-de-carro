import React from 'react';
import axios from 'axios';
import Card from '../components/Card';

class List extends React.Component {
    state = {
        carros: [],
        loading: true
    };

    componentDidMount() {
        axios.get('http://157.230.213.199:3000/api/cars')
            .then(res => {
                // console.log(res)
                this.setState({
                    carros: res.data,
                    loading:false
                });
            })
    }

    removeLista(id){
        this.setState({
            carros: this.state.carros.filter(item => id !== item._id)
        })
    }

    render() {

        let content = (<p> Carregando... </p>)

        if (!this.state.loading) {
            content = (<div className="d-flex justify-content-center flex-wrap">
                {this.state.carros.map((item, index) => (
                    <Card carro ={item} removeCarro ={this.removeLista.bind(this)}/>

            ))}

            </div>)
        }

        return (
            <div className="container">
                <h1>Lista de carros</h1>
                {content}

            </div>
        );
    }
}

export default List;