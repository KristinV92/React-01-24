import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {
const [search, setSearch] = useState('');
const [bodyParts, setBodyParts] = useState([]);

useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises", exerciseOptions);
      console.log(bodyPartsData);
      // setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises", exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercises) => exercises.name.toLowerCase().includes(search)
               || exercises.target.toLowerCase().includes(search)
               || exercises.equipment.toLowerCase().includes(search)
               || exercises.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      setExercises(searchedExercises);
    }
    }

  return (
    <Stack alignitems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px'}}} mb="50px" textAlign="center">
            Awesome Exercises You <br />
            Should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField 
                sx={{
                    input: {
                     fontWeight:'700', 
                     border:'none', 
                     borderRadius: '4px'
                    },
                    width: { lg: '800px', xs: '350px'},
                    backgroundColor: '#fff', 
                    borderRadius: '40px'
                }} 
                height="76px" 
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())} 
                placeholder="Search Exercises" 
                type="text"
                />
            <Button className="search-btn"
            sx={{
                bgcolor:'#ff2625',
                color: '#fff', 
                textTransform: 'none', 
                width: { lg: '173px', xs: '80px'},
                height: '56px', position: "absolute", right: '0', fontSize: { lg: '20px', xs: '14px'} }} onClick={handleSearch}>
                Search
            </Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises