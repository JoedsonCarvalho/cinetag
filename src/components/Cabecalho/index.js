import CabecalhoLink from "components/CabecalhoLink";
import { Link } from "react-router-dom";
import Logo from './assets/logo.png';
import styles from './cabecalho.module.css'


const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={Logo} alt="Logo do cinetag"/>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;