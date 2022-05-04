import React from 'react';
import { useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import './Book.css';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/Books/Books';

function Book(props) {
  const {
    title, author, category, progress, chapter, id,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="container-fluid">
      <div className="row m-2 pt-5">
        <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center flex-column">
          <p className="category">{category}</p>
          <h2>{title}</h2>
          <p className="author">{author}</p>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 pt-3">
          <div className="circular-progress d-flex">
            <div style={{ width: 100, height: 100 }}>
              <CircularProgress size={100} variant="determinate" value={progress} />
            </div>
            <div className="progress">
              <p className="percent">
                {progress}
                %
              </p>
              <p className="completed">Completed</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-around">
          <div className="grid-item vl" />
          <div className="d-flex justify-content-center flex-column">
            <p className="current">Current Progress</p>
            <p>{chapter}</p>
            <button type="button">Update Progress</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mt-2 mb-2 d-flex space-around w-50">
          <button className="comment-btn" type="button">Comment</button>
          <button type="button" className="line">|</button>
          <button
            key={id}
            type="button"
            className="remove-btn"
            onClick={() => {
              dispatch(removeBook(id));
            }}
          >
            Remove Book
          </button>
          <button type="button" className="line">|</button>
          <button className="edit-btn" type="button">Edit</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
