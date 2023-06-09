import styles from './Details.module.scss';
import Image from 'next/image';

import React from 'react'

const Details = () => {
  return (
    <section className={styles.details}>
      <div className={styles.roast}>
        <h2>Experimente os diferentes tipos de torra</h2>
        <div className={styles.types}>
          <span className={styles.light} />
          <span className={styles.medium} />
          <span className={styles.dark} />          
        </div>
      </div>
      <Image src='/coffee2.png' alt='café' width={340} height={225} />
      <div className={styles['card-wrapper']}>
        <div className={styles.card}>
          <h2>Bytes Coffee</h2>
          <div className={styles.info}>
            <h3>Endereço</h3>
            <h4>Rua do Café, 000 | Cidade - UF</h4>
          </div>
          <div className={styles.info}>
            <h3>Funcionamento</h3>
            <h4>
              <span>Segunda à Sexta - 09h00 às 18h00</span>
              <span>Sábados - 09h00 às 14h00</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details