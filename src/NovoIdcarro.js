import React, { useState } from 'react';
import axios from 'axios';

export default class NovoIdcarro extends React.Component{

  state = {
    cars: {},
    valoresIniciais: {},
    carro: {},
  };


  constructor(props){
    super(props)

    console.log("aqui")
    console.log(props)}

 /* setValue(chave, valor) {
    setCarro({
      ...carro,
      [chave]: valor,
    })
  }

  handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    setCarros([
      carro
    ]); 

    axios.put(`http://157.230.213.199:3000/api/cars/`,carro)
      .then(res => {
        console.log(res)
      });

    setCarro(valoresIniciais)
  } */


  render (){
 /*   <div>
      <h1>Cadastro do carro: {carro.nome}</h1>

      <form onSubmit={handleSubmit}>
      <ul>
        {carros.map((carro, indice) => {
          return (
            <li key={`${carro}${indice}`}>
              {carro.nome}
            </li>
          )
        })}
      </ul>
      </form>
    </div> */
    return (
        <div>
          <p>qlqr coisa</p>
        </div>
       )
  }}