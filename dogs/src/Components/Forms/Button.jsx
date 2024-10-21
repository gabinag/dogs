import styles from './Button.module.css';

export const Button = ({children, ...props}) => {
  return (
    <button {...props} className={styles.button}>{children}</button>
  )
}

{/*O ...props permite passar as várias props diretamente no componente utilizado em outros arquivos*/}