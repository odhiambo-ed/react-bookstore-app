import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Books({
  category, title, id, author,
}) {
  const dispatch = useDispatch();

  const remBook = () => {
    dispatch(removeBook(id));
  };
  return (
    <div
      style={{
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
            {category}
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
            {author}
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
          <CircularProgress size={70} variant="determinate" value={23} />
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
              {`${23} %`}
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
              Twenty Five
            </h2>
            <Button
              style={{
                paddingLeft: 100,
                paddingRight: 100,
              }}
              variant="contained"
            >
              Update
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
        <button
          type="button"
          style={{
            cursor: 'pointer',
            color: '#189bed',
            border: 'none',
            outline: 'none',
            background: 'none',
            fontSize: 16,
            fontWeight: 'bold',
          }}
          onClick={remBook}
        >
          Remove
        </button>
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
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
