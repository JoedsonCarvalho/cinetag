import styles from './card.module.css';
import iconeFavoritar from './assets/favoritar.png';
import iconeDesfavoritar from './assets/desfavoritar.png';
import { useFavoritoContext } from 'contextos/Favoritos';
import { Link } from 'react-router-dom';

const Card = ({id, titulo, capa}) => {
    const {favorito, adicionarFavorito} = useFavoritoContext();
    console.log(favorito)
    const ehFavorito = favorito.some((fav) => fav.id === id);
    console.log(ehFavorito);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    return(
        <div className={styles.card}>
            <Link to={`/${id}`} className={styles.link}>
                <img src={capa} alt={titulo} className={styles.capa}/>
                <h2>{titulo}</h2>
            </Link>
            <img src={icone} 
            alt="Favoritar filme." 
            className={styles.favoritar}
            onClick={() => { 
                adicionarFavorito({ id, titulo, capa })
            }}/> 
        </div>
    )
}

export default Card;