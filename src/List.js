import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class List extends React.Component {
    state = {
        carros: []
    };

    componentDidMount() {
        axios.get('http://157.230.213.199:3000/api/cars')
            .then(res => {
                // console.log(res)
                this.setState({
                    carros: res.data
                });
            })
    }

    render() {

        let content = <p> Carregando... </p>

        if (this.state.carros.lenght !== 0) {
            content = (<ul>
                {this.state.carros.map((item, index) => (
                    <li key={index}>

                        <p><b>ID:</b>{item._id}</p>
                        <p><b>Nome:</b> {item.title}</p>
                        <p><b>Marca:</b> {item.brand}</p>
                        <p><b>Preço:</b> {item.price}</p>
                        <p><b>Idade:</b> {item.age}</p>

                        <Link to={{
                            pathname: `./cars/${item._id}`,
                            data: item
                        }}>Editar </Link>
                    </li>
                ))}

            </ul>)
        }

        return (
            <div>
                <h1>Lista de carros</h1>
                {content}

            </div>
        );
    }
}

export default List;