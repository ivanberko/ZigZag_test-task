import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Timer from '../Timer';

// Styles
import * as styles from './StylesModalComponent.module.css';

const ModalComponent = ({ onCancel, isVisible, initCarrency }) => {
  const [activeBox, setActiveBox] = useState({});
  const [clicked, setClicked] = useState(null);

  const handleClick = (e, index) => {
    setActiveBox(initCarrency[index]);
    setClicked(initCarrency[index].id);
  };

  const handleSubmit = () => {
    // eslint-disable-next-line no-alert
    alert(`Cпособ оплаты SELECTE.
Cумма пополнения ${activeBox.receiveAnAmount}.`);
  };

  useEffect(() => {
    if (!isVisible) {
      setActiveBox({});
      setClicked(null);
    }
  }, [isVisible]);

  return (
    <section className={styles.modalWrap}>
      <button className={styles.btnClose} type="button" onClick={onCancel}>
        {' '}
      </button>
      <span className={styles.trigger}>+100%</span>
      <Timer isVisible={isVisible} />
      <h2 className={styles.title}>Увеличьте свой депозит!</h2>
      <div className={styles.listCard}>
        {initCarrency.map((el, index) => (
          <div
            className={clicked === el.id ? styles.active : styles.itemCard}
            key={el.id}
            onClick={(e) => handleClick(e, index)}
            id={el.id}
            role="button"
            tabIndex="0"
            aria-hidden="true"
          >
            <p className={styles.replenishment}>
              Пополнить на <span>${el.replenishment}</span>
            </p>
            <p className={styles.receiveAnAmount}>
              Получить <span>${el.receiveAnAmount}</span>
            </p>
            <span
              className={
                clicked === el.id ? styles.checkedActive : styles.checked
              }
            >
              {' '}
            </span>
          </div>
        ))}
      </div>
      <p className={styles.credited}>
        <span>
          $ {clicked ? activeBox.receiveAnAmount?.toFixed(2) : '0.00'}
        </span>{' '}
        будет зачисленно вам на счет
      </p>
      <button
        className={styles.submitButton}
        type="button"
        onClick={handleSubmit}
      >
        Пополнить
      </button>
      <p className={styles.politics}>
        При пополнении с банковской карты списание средств происходит по курсу
        банка клиента
      </p>
      <button className={styles.moreButton} type="button" onClick={() => {}}>
        Подробнее
      </button>
    </section>
  );
};

ModalComponent.propTypes = {
  onCancel: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  initCarrency: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      replenishment: PropTypes.number.isRequired,
      receiveAnAmount: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ModalComponent;
