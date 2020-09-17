import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Modal } from 'antd';

// Styles
import styles from './styles.module.css';

// Components
import ModalComponent from '../Modal';

const initCarrency = [
  { id: 157744, replenishment: 50, receiveAnAmount: 100 },
  { id: 378264, replenishment: 100, receiveAnAmount: 200 },
  { id: 234234, replenishment: 500, receiveAnAmount: 1000 },
];

const App = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <button className={styles.openModal} type="button" onClick={showModal}>
        Открыть модалку
      </button>
      <Modal
        visible={visible}
        onCancel={handleCancel}
        closable={false}
        footer={null}
        width={695}
        style={{
          height: 727,
          background: '#2c334a',
          boxShadow: '25px 25px 50px rgba(24, 28, 38, 0.5)',
          borderRadius: 10,
          border: '3px solid #36415d',
          margin: '0 auto',
        }}
      >
        <ModalComponent
          onCancel={handleCancel}
          isVisible={visible}
          initCarrency={initCarrency}
        />
      </Modal>
    </>
  );
};

App.propTypes = {};

export default App;
