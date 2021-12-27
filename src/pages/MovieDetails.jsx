import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css"
import placeholder from "../placeholder.jpg"


export function MovieDetails(){

    const { movieid } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] =useState(null);

    useEffect(()=>{
        setIsLoading(true);
        get("/movie/"+ movieid).then(data =>{
            setMovie(data);
            setIsLoading(false);
        })
    }, [movieid])

    if (isLoading){
        return <Spinner />
    }

    const imageUrl = movie.poster_path 
    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
    : placeholder;
    
    return(
        <div className={styles.detailsContainer}>
            <img 
                 width={300}
                height={400}
                className={`${styles.col} ${styles.movieImage}`} 
                src={imageUrl} 
                alt={movie.title}
            />
            <div className={`${styles.col} ${styles.MovieDetails}`}>
                <p className={styles.firstItem}><strong>Titulo: </strong>{movie.title}</p>
                <p><strong>Generos: </strong>{movie.genres.map(genre => genre.name ).join(", ")}</p>
                <p><strong>Descripción: </strong>{movie.overview}</p>
            </div>
        </div>
    )
}