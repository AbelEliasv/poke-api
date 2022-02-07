import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, } from '@mui/material';
import Chip from '@mui/material/Chip';
export default function PokemonCard({ pokemon }) {
    const { data } = pokemon
    const { abilities } = data

    return (

        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea >
                <Box style={{ background: "#efefef" }}>
                    <img src={data.sprites.front_default} height="150"
                        width="150"></img>

                    <Box style={{ background: "#898989", color: "white", padding: "4px",display:"flex",width:"max-content" , fontSize:"12px"}}>
                        ID/{data.id}
                    </Box>

                </Box>
                <CardContent style={{ textAlign: 'left' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {abilities.map((abilities) =>

                            <Chip size="small" key={abilities.ability.name} label={abilities.ability.name} variant="outlined" />
                        )}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>

    );
}