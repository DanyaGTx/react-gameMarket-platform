import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { useEffect, useState } from 'react';
import LoginModal from './components/LoginModal/LoginModal';
import RegisterModal from './components/RegisterModal/RegisterModal';
import { Provider } from 'react-redux';
import {store} from './redux'

function App() {
  const [modalActive, setModalActive] = useState(false);

  const [modalLogineOpen, setModalLogineOpen] = useState(false);
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false);



  
  const openModal = () => {
    setModalActive(!modalActive);
  }

  const openLogin = () => {
    setModalLogineOpen(true);
    setModalRegisterOpen(false);
    openModal();
  }
  const openRegister = () => {
    setModalRegisterOpen(true);
    setModalLogineOpen(false);
    openModal();
  }

  return (
    <Provider store={store}>
      <div className='wrapper'>
        <Header openModal={openModal} openLogin={openLogin} openRegister={openRegister} setModalRegisterOpen={setModalRegisterOpen} setModalLogineOpen={setModalLogineOpen} />
        <Content openModal={openModal} openLogin={openLogin} />
        <Footer />
        <Modal active={modalActive} setActive={setModalActive}>
          {modalLogineOpen && <LoginModal setActive={setModalActive} />}
          {modalRegisterOpen && <RegisterModal setActive={setModalActive} />}
        </Modal>
      </div>
    </Provider>
  );
}
export default App;
