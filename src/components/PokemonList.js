import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
    return (
        <div>
            <Grid container spacing={1}>
                {props.pokemons.map((pokemon) =>(
                    <React.Fragment key={pokemon.data.id}>
                        <Grid item xs={3} xl={3} lg={3}>
                            <PokemonCard pokemon={pokemon}></PokemonCard>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </div>
    );
}