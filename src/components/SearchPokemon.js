import React, {Fragment, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

export default function SearchPokemon(props) {
    const [dataSearch, setNamePokemon] = useState({
        nombre: ''
    })

    const handleInputChange = (event) => {
        setNamePokemon({
            ...dataSearch,
            [event.target.name]: event.target.value
        })
    }
    
    const search = (event) => {
        event.preventDefault()
        props.onEnterSearch(dataSearch)
        
    }
    return (
        <div className="k-primary">
            <form onSubmit={search}>
                <Paper elevation={0} >
                    <TextField name='nombre' onChange={handleInputChange} fullWidth label="Filtar pokemons por nombre . Ejemplo 'charmander'" id="fullWidth" />
                </Paper>
                <Box style={{textAlign:'left', color:'#5c3613'}}>Presione enter para realizar busqueda ."</Box>
            </form>
        </div>
    );
}