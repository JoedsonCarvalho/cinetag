import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import styles from './favoritos.module.css';
import Card from 'components/Card';
import { useFavoritoContext } from 'contextos/Favoritos';

const Favoritos = () => {
    const {favorito} = useFavoritoContext();
    return(
        <div className={styles.favoritos}>
            <Banner imagem="favoritos" />
            <Titulo >
                <h1>Meus Favoritos</h1>
            </Titulo>

            <section className={styles.container}>
                {favorito.map(fav => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
           
        </div>
    )
}

export default Favoritos;