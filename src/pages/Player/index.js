import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import styles from './player.module.css';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

const Player = () => {
    const parametros = useParams();
    const [video, setVideo] = useState([]);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/JoedsonCarvalho/cinetag-api/videos?id=${parametros.id}`)
        .then(response => response.json())
        .then(data => {
            setVideo(...data);
        })
        .catch(err => console.log(err));
    }, [])

    // const video = videos.find(video => {
    //     return video.id === Number(parametros.id);
    // })
    
    if(!video){
        return <NaoEncontrada />
    }

    return(
        <>
            <Banner imagem="player"/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>

            <section className={styles.container}>
                <iframe 
                width="1200" 
                height="677" 
                src={video.link}
                title={video.titulo}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;