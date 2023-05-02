import React from 'react';

import styles from "../style/common.module.css"
import MovieCard from '../components/MovieCard';

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));


    const url ='https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7c54a3b262msh1405c9fc0093a68p159b63jsn1383c9810142',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    console.log(main_data[0].jawSummary)

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem,idx) => {
                                return <MovieCard key={idx} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;