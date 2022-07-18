import ReactDOM from "react-dom";
import Character from "./Character";
import React from "react";
import './Character/Character.module.css';
import CharacterHead from "./CharacterHead/CharacterHead";
import '../pages/Characters.css';
const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div onClick={this.props.onClose} className="modal_character">
          {this.props.children}
      </div>,
      modalRoot
    )
  }
}

class ShowUser extends React.Component{
  state = {showModal: false}
  handleShowMessageClick = () => this.setState({showModal: true})
  handleCloseModal = () => this.setState({showModal: false})
  render() {
    return (
      <React.Fragment>
          <div onClick={this.handleShowMessageClick} className="characterCard_wrapper" style={{backgroundColor:'white'}}>
                <div className="characterCard_character">
                        <CharacterHead face={this.props.face} head={this.props.head} accessory={this.props.acc} skin={this.props.skin} />
                </div>
                <div className="characterCard_name">
                    {this.props.name}
                </div>
          </div>
          {this.state.showModal ? (
            <Modal onClose={this.handleCloseModal}>
              <Character body={this.props.body} face={this.props.face} head={this.props.head} accessory={this.props.acc} skin={this.props.skin} clothe={this.props.clothe}/>
            </Modal>
          ) : null}
      </React.Fragment>
    )
  }
}
export default ShowUser;
