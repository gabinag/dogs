import React from 'react';
import styles from './Footer.module.css';
import Dogs from '../Assets/dogs-footer.svg?react';

export const Footer = () => {
  return (
    <footer>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}
