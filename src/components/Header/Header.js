import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="header-body">
            <nav className="navigation">
                <h1 className="header">BookStore CMS</h1>
                <ul className="links">
                    <li>
                        <Link to="/" className="link1 link">Books</Link>
                    </li>
                    <li>
                        <Link to="/categories" className="link2 link">Categories</Link>
                    </li>
                </ul>
            </nav>
            <div className="center">
                <Box sx={{ flexGrow: 0 }}>
                    <IconButton sx={{ p: 0 }}>
                        <PersonIcon
                            style={{
                                color: '#189bed',
                            }}
                        />
                    </IconButton>
                </Box>
            </div>
        </div>
    );
}

export default Header;
