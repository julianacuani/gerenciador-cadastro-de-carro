import React, { useState } from 'react';
import axios from 'axios';
import FormField from '../components/FormField';
import { useForm } from "react-hook-form";



function Cadastro() {
  const { register, handleSubmit, errors } = useForm();

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

  function onSubmit(carro) {

    axios.post('http://157.230.213.199:3000/api/cars', carro)
      .then(res => {
        console.log(res)
        setCarro(valoresIniciais)
      });
  }


  return (
    <div className="container">
      <h1>Cadastro de carro: {carro.nome}</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <FormField
              label="Nome do carro"
              type="text"
              name="title"
              value={carro.title}
              onChange={handleChange}
              validation={(register({
               required:true
              }))} 
              errors={errors.title}
              validationmesenger={{
                required: "Campo obrigatório"
              }}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4">
          <FormField
            label="Marca"
            type="text"
            name="brand"
            value={carro.brand}
            onChange={handleChange}
          />
        </div>
        </div>

      <div className="row d-flex justify-content-center">
        <div className="col-4">
        <FormField
          label="preço"
          type="text"
          name="price"
          value={carro.price}
          onChange={handleChange}
        />
      </div>
    </div>

    <div className="row d-flex justify-content-center">
      <div className="col-4">
      <FormField
        label="idade"
        type="text"
        name="age"
        value={carro.age}
        onChange={handleChange}
      />
    </div>
        </div >
        <div className="row d-flex justify-content-center">
          <div className="col-2 col-4 d-flex justify-content-end">
    <button className="btn btn-dark">
      Cadastrar
         </button>
         </div>
         </div>
      </form >


    <ul>
      {carros.map((carro, indice) => {
        return (
          <li key={`${carro}${indice}`}>
            {carro.nome}
          </li>
        )
      })}
    </ul>
    </div >
  )
}

export default Cadastro;