import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['LOTR', 'Hobbit', 'Silmarillion']);

  // const handleAdd = () => {
  //   setCategories(cats => [...cats, 'Elfs']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      <ol>
        {categories.map(category => {
          return <li key={category}>{ category }</li>
        })}
      </ol>

    </>
  )
}
