import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Categories.css';
import { addCategory } from '../../redux/Categories/Categories';

function Categories() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.categoriesReducer);
  return (
    <div className="container">
      <button
        className="category-btn"
        type="button"
        onClick={() => dispatch(addCategory())}
      >
        Check Status
        {state}
      </button>
    </div>
  );
}

export default Categories;
