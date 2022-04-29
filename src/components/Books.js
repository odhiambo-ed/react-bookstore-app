import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';

function Books({
  genre, title, director, percent, chapter,
}) {
  return (
    <div style={{
      marginBottom: 10,
      marginTop: 20,
    }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
            width: 300,
          }}
        >
          <h3
            style={{
              marginBottom: -15,
              color: 'gray',
            }}
          >
            {genre}
          </h3>
          <h1
            style={{
              marginBottom: -2,
            }}
          >
            {title}
          </h1>
          <h3
            style={{
              color: '#189bed',
            }}
          >
            {director}
          </h3>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <CircularProgress size={70} variant="determinate" value={percent} />
          <div
            style={{
              marginLeft: 20,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
            }}
          >
            <h1
              style={{
                marginBottom: -2,
              }}
            >
              {`${percent} %`}
            </h1>
            <h3
              style={{
                marginTop: -2,
                color: 'gray',
              }}
            >
              Completed
            </h3>
          </div>
          <div
            style={{
              marginLeft: 100,
              backgroundColor: 'gray',
              width: 3,
              height: 80,
            }}
          />
          <div
            style={{
              marginLeft: 100,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
              width: 300,
            }}
          >
            <h3
              style={{
                color: 'gray',
              }}
            >
              CURRENT CHAPTER
            </h3>
            <h2
              style={{
                marginTop: -2,
              }}
            >
              {chapter}
            </h2>
            <Button
              style={{
                paddingLeft: 100,
                paddingRight: 100,
              }}
              variant="contained"
            >
              Add Book
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: 400,
          marginLeft: 160,
        }}
      >
        <h4
          style={{
            color: '#189bed',
          }}
        >
          Comments
        </h4>
        <div
          style={{
            backgroundColor: 'gray',
            width: 2,
            height: 20,
          }}
        />
        <h4
          style={{
            color: '#189bed',
          }}
        >
          Remove
        </h4>
        <div
          style={{
            backgroundColor: 'gray',
            width: 2,
            height: 20,
          }}
        />
        <h4
          style={{
            color: '#189bed',
          }}
        >
          Edit
        </h4>
      </div>
    </div>
  );
}

export default Books;

Books.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};
