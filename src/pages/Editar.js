import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import FormField from '../components/FormField';
import { useForm } from 'react-hook-form';

function Editar() {
  let location = useLocation()
  let history = useHistory()
  const { register, handleSubmit, errors } = useForm();

  const valoresIniciais = {
    title: '',
    brand: '',
    price: '',
    age: '',
  }

  const [carroId, setCarroId] = useState("");
  const [carro, setCarro] = useState(valoresIniciais);
  const [showModal, setModal] = useState(false);
  const handleCloseModal = () => { setModal(false); history.push("/") }; // Função que fecha o modal
  const handleShowModal = () => setModal(true); // Função que abre o modal

  useEffect(() => {
    if (location.data) {
      setCarro(location.data)
      setCarroId(location.data._id)
    }
    else if (location.pathname) {
      const carroId = location.pathname.replace("/editar/", "")
      setCarroId(carroId)
      getCarro(carroId)
    }
  }, [location]);


  function getCarro(carroId) {
    axios.get(`http://157.230.213.199:3000/api/cars/${carroId}`)
      .then(res => {
        setCarro(res.data)
      });
  }

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

    axios.put(`http://157.230.213.199:3000/api/cars/${carroId}`, carro)
      .then(res => {
        handleShowModal()
      });
  }

  return (
    <div className="container">
      <h1> Editar carro {carro.nome}</h1>

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
                required: true
              }))}
              errors={errors.title}
              validationMsg={{
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
              validation={(register({
                required: true
              }))}
              errors={errors.brand}
              validationMsg={{
                required: "Campo obrigatório"
              }}
            />
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <FormField
              label="preço"
              type="number"
              name="price"
              value={carro.price}
              onChange={handleChange}
              validation={(register({
                required: true,
                min: 1
              }))}
              errors={errors.price}
              validationMsg={{
                required: "Campo obrigatório",
                 min: "Valor mínimo: 1"
              }}
            />
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <FormField
              label="Ano"
              type="number"
              name="age"
              value={carro.age}
              onChange={handleChange}
              validation={(register({
                required: true,
                min: 1885,
                max: new Date().getFullYear()
              }))}
              errors={errors.age}
              validationMsg={{
                required: "Campo obrigatório",
                min: "Ano mínimo: 1885",
                max: `Ano máximo: ${new Date().getFullYear()}`
              }}
            />
          </div>
        </div >
        <div className="row d-flex justify-content-center">
          <div className="col-2 col-4 d-flex justify-content-end">
            <button className="btn btn-dark">
              Editar
         </button>
          </div>
        </div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Editar</Modal.Title>
          </Modal.Header>
          <Modal.Body>Item editado com sucesso</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseModal}>
              OK
          </Button>
          </Modal.Footer>
        </Modal>
      </form >
    </div >
  )
}

export default Editar;
