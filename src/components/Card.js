import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Card extends React.Component {

   constructor() {
      super()
      this.state = { show: false }
   }

   deletar() {
      axios.delete(`http://157.230.213.199:3000/api/cars/${this.props.carro._id}`)
         .then(res => {
            console.log(res)
            this.fechaModal()
            this.props.removeCarro(this.props.carro._id)
         });
   }

   abreModal() {
      this.setState({ show: true })
   }

   fechaModal() {
      this.setState({ show: false })
   }

   render() {
      return (
         <div>
            <div className="card m-2 border-dark" >
               <div className="card-body">
                  <h5 className="card-title">{this.props.carro.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{this.props.carro.brand}</h6>
                  <p className="card-text"> {this.props.carro.price} Preço </p>
                  <p className="card-text"> {this.props.carro.age} Ano </p>
                  <div className="d-flex justify-content-around">
                     <Link to={`./editar/${this.props.carro._id}`} className="card-link">
                        <Button variant="dark" >  Editar </Button>
                     </Link>
                     <Button variant="danger" onClick={this.abreModal.bind(this)}> Deletar </Button>
                  </div>
               </div>
            </div>

            <Modal show={this.state.show} onHide={this.fechaModal.bind(this)}>
               <Modal.Header closeButton>
                  <Modal.Title>Excluir</Modal.Title>
               </Modal.Header>
               <Modal.Body>Deseja realmente excluir este item?</Modal.Body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={this.fechaModal.bind(this)}>
                     Não
          </Button>
                  <Button variant="primary" onClick={this.deletar.bind(this)}>
                     Sim
          </Button>
               </Modal.Footer>
            </Modal>
         </div>
      );
   }
}
export default Card;