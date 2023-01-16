import styles from './banner.module.css';

const Banner = ({imagem}) => {
    return(
        <div className={styles.capa} style={{backgroundImage: `url('/img/banner-${imagem}.png')`}}>

        </div>
    )
}

export default Banner;