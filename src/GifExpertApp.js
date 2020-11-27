import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['welcome']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <p>Search:</p>
      <AddCategory
        setCategories={setCategories}
      />
      <hr />

      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
              />
            ))
            }
      </ol>

    </>
  )
}
