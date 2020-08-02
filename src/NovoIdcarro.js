import React from 'react';
import axios from 'axios';
import FormField from './FormField';

export default class NovoIdcarro extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      _id: "",
      title: "",
      brand: "",
      price: "",
      age: "",
    };
  }

  componentDidMount() {
    if (this.props.location.data) {
      this.setState({ _id: this.props.location.data._id })
      this.setState({ title: this.props.location.data.title })
      this.setState({ brand: this.props.location.data.brand })
      this.setState({ price: this.props.location.data.price })
      this.setState({ age: this.props.location.data.age })
    } else if (this.props.match.params.id) {
      this.handleID(this.props.match.params.id)
    }
  }

  handleChange(e) {
    const nome = e.target.name;
    const valor = e.target.value;

    this.setState({ [nome]: valor })
  }

  handleID(id) {
    axios.get(`http://157.230.213.199:3000/api/cars/${id}`)
      .then(res => {
        this.setState({ _id: res.data._id })
        this.setState({ title: res.data.title })
        this.setState({ brand: res.data.brand })
        this.setState({ price: res.data.price })
        this.setState({ age: res.data.age })
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.put(`http://157.230.213.199:3000/api/cars/${this.state._id}`, this.state)
      .then(res => {
        console.log(res)
      });
  }

  render() {
    return (
      <div>
        <h1>Editar o carro </h1>

        <form onSubmit={(event) => this.handleSubmit(event)}>

          <FormField
            label="Nome do carro"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
          />

          <FormField
            label="Marca"
            type="text"
            name="brand"
            value={this.state.brand}
            onChange={this.handleChange.bind(this)}
          />

          <FormField
            label="preço"
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleChange.bind(this)}
          />

          <FormField
            label="idade"
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange.bind(this)}
          />

          <button>
            Cadastrar
         </button>
        </form>
      </div>
    )
  }
}