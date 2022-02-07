import React from 'react';
import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Chip, Fade, Grid } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

export default function PokemonsDetailPage(props) {

    let { id } = useParams();


    const [pokemon, setPokemon] = useState({});
    const [abilities, setAbilities] = useState([]);
    const [types, setTypes] = useState([]);
    const [stats, setStats] = useState([]);
    const [sprites, setSprites] = useState({});

    useEffect(() => {

        const fetchPokemon = async () => {
            const res = await axios.get(
                'https://pokeapi.co/api/v2/pokemon/' + id,
            )

            setPokemon(res.data);
            setAbilities(res.data.abilities)
            setTypes(res.data.types)
            setStats(res.data.stats)
            setSprites(res.data.sprites)
            
        };

        fetchPokemon()

    }, []);
    console.log(pokemon);

    const listStats = stats.map((stats) =>
        <Box>
            <span>{stats.stat.name} {stats.base_stat}%</span>
            <LinearProgress variant="determinate" value={stats.base_stat} />
            <br />
        </Box>
    );


    return (
        <div className="k-primary">
            <Grid container >
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Paper >
                        <Box>
                            <br />
                            <h2>{pokemon.name}</h2>
                        </Box>
                        <Grid container>
                            <Grid item xs={4}>
                                <Box>
                                    <div>ID : {pokemon.id}</div>
                                    <div>Alto : {pokemon.height}</div>
                                    <div>Ancho : {pokemon.weight}</div>
                                    <div>Habilidates : {abilities.map((abilities) =>
                                        <Chip size="small" key={abilities.ability.name} label={abilities.ability.name} variant="outlined" />
                                    )}</div>

                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <img src={sprites.front_default} alt="" height="100px" width={100} />
                            </Grid>
                            <Grid item xs={3} style={{ margin: '2px' }}>
                                {listStats}
                            </Grid>

                        </Grid>

                    </Paper>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>








        </div>
    );
}

