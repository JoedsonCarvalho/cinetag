import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useEffect, useState } from "react";
import styles from './inicio.module.css';


function Inicio() {
    // axios.get("https://my-json-server.typicode.com/JoedsonCarvalho/cinetag-api/db")
    // .then(res => {
    //     console.log(res.data)
    //     const videos = res.data;
    //     return videos
    // })
    // .catch(err => console.log(err))
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/JoedsonCarvalho/cinetag-api/videos")
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados);
        })
        .catch(err => console.log(err))
    }, [])
    return(
        <>
            <Banner imagem="home" />
            <Titulo >
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map(video => <Card id={video.id} titulo={video.titulo} capa={video.capa} />)}
                {/* <Card id="1" titulo="teste" capa="https://jaguarparade.com/sp2019/wp-content/uploads/2019/08/Post_Blog-3.jpg" /> */}
            </section>
        </>
    )
}

export default Inicio;