import styles from './titulo.module.css';

const Titulo = ({children}) => {
    return(
        <div className={styles.titulo}>
            {children}
        </div>
    )
}

export default Titulo;