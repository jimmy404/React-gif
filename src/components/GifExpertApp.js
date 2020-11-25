import React, { useState } from 'react';

export const GifExpertApp = () => {

  // const categories = ;
  const [categories, setCategories] = useState(['LOTR', 'Hobbit', 'Silmarillion']);

  const handleAdd = () => {
    setCategories(cats => [...cats, 'Elfs']);
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={handleAdd}>Add</button>

      <ol>
        {categories.map(category => {
          return <li key={category}>{ category }</li>
        })}
      </ol>

    </>
  )
}

export default GifExpertApp;
