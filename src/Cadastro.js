import React, { useState } from 'react';
import axios from 'axios';
import FormField from './FormField';

function Cadastro() {

  const valoresIniciais = {
    tittle: '',
    brand: '',
    price: '',
    age: '',
  }
  const [carros, setCarros] = useState([]);
  const [carro, setCarro] = useState(valoresIniciais);


  function setValue(chave, valor) {
    setCarro({
      ...carro,
      [chave]: valor,
    })
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCarros([
      carro
    ]);

    axios.post('http://157.230.213.199:3000/api/cars', carro)
      .then(res => {
        console.log(res)
      });

    setCarro(valoresIniciais)
  }


  return (
    <div>
      <h1>Cadastro de carro: {carro.nome}</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome do carro"
          type="text"
          name="title"
          value={carro.title}
          onChange={handleChange}
        />

        <FormField
          label="Marca"
          type="text"
          name="brand"
          value={carro.brand}
          onChange={handleChange}
        />

        <FormField
          label="preço"
          type="text"
          name="price"
          value={carro.price}
          onChange={handleChange}
        />

        <FormField
          label="idade"
          type="text"
          name="age"
          value={carro.age}
          onChange={handleChange}
        />
        <button>
          Cadastrar
         </button>
      </form>

      <ul>
        {carros.map((carro, indice) => {
          return (
            <li key={`${carro}${indice}`}>
              {carro.nome}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Cadastro;