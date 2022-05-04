import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/Books/Books';

export default function MultipleSelect() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('Thomas Jefferson');

    const categories = [
        { id: 1, categories: 'Horror' },
        { id: 2, categories: 'Fiction' },
        { id: 3, categories: 'Thriller' },
        { id: 4, categories: 'Dark' },
        { id: 5, categories: 'Historical' },
        { id: 6, categories: 'Romance' },
    ];

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const dispatch = useDispatch();

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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                    onClick={async (event) => {
                        await event.preventDefault();
                        await dispatch(
                            addBook(title, author, category),
                            setAuthor('Thomas Jefferson'),
                        );
                        await setTitle('');
                        await setCategory('');
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
