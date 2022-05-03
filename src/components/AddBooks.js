import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function MultipleSelect() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    { id: 1, categories: 'Horror' },
    { id: 2, categories: 'Fiction' },
    { id: 3, categories: 'Thriller' },
    { id: 4, categories: 'Dark' },
    { id: 5, categories: 'Historical' },
    { id: 6, categories: 'Romance' },
    { id: 7, categories: 'Science Fiction' },
    { id: 8, categories: 'Fantasy' },
    { id: 9, categories: 'Dystopian' },
    { id: 10, categories: 'Realist' },
  ];

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const dispatch = useDispatch();

  const sendBook = () => {
    const newBook = {
      id: Math.random() * 232323,
      author: 'Allan Muller',
      title: name,
      category,
    };
    dispatch(addBook(newBook));
    setName('');
  };

  return (
    <div
      style={{
        marginBottom: 30,
      }}
    >
      <h1
        style={{
          textAlign: 'left',
          fontWeight: 'bold',
          fontSize: 20,
          color: '#2c2d2e',
          marginLeft: 50,
        }}
      >
        ADD NEW BOOK
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            width: 700,
            maxWidth: '100%',
          }}
        >
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            label="Book title"
            id="fullWidth"
          />
        </Box>
        <Box sx={{ minWidth: 250 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              {categories.map((item) => (
                <MenuItem key={item.id} value={item.categories}>
                  {item.categories}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button
          onClick={() => {
            sendBook();
          }}
          style={{
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 100,
            paddingRight: 100,
          }}
          variant="contained"
        >
          Add Book
        </Button>
      </div>
    </div>
  );
}
