import styles from './About.module.scss';
import Image from 'next/image';

import React from 'react'

const About = () => {
  return (
    <section className={styles.about}>
      <Image src='/about.png' alt='sbore nós' width={500} height={400} />
      <div className={styles.content}>
        <h2 className='title light-bg'>Conheça mais sobre o Bytes Coffee</h2>
        <p>
          Tudo começou quando um grupo de amigos percebeu que faltava um lugar
          em sua cidade para desfrutar de um café de qualidade, em um ambiente
          aconchegante e inspirador. Assim, surgiu a ideia de criar um espaço
          onde as pessoas pudessem se conectar com a natureza e com elas mesmas,
          enquanto saboreavam um café especial.
        </p>
        <p>
          Nosso espaço foi projetado para proporcionar uma experiência única, em
          sintonia com a natureza. Com tons verdes, plantas e uma decoração
          acolhedora, você pode desfrutar de um ambiente relaxante e calmo, que
          convida a uma pausa no ritmo acelerado do dia a dia.
        </p>
      </div>
    </section>
  )
}

export default About