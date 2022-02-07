import React from 'react';
import PokemonList from '../components/PokemonList';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchPokemon from '../components/SearchPokemon';
import { Box } from '@mui/system';


export default function PokemonsPage(props) {

    function handleSearch(params) {
        props.onEnterSearch(params)
    }

    console.log(props.pokemonsSearch,props.pokemons);
    return (
        <div className="k-primary">
            <br></br>
            <Container maxWidth="md">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12} lg={12}>
                        <SearchPokemon onEnterSearch={handleSearch}></SearchPokemon>
                    </Grid>
                    <Grid item xs={12} md={12}>
                       
                        <br />
                        <PokemonList pokemons={props.pokemonsSearch != 0 ? props.pokemonsSearch : props.pokemons }></PokemonList>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

