import React,{ useState, useEffect } from 'react'
import { ListBox } from 'primereact/listbox';
import CategoryService from '../services/CategoryService';

export default function Categories() {

    const [categories, setCategories] = useState([]);
    let [selectedCategory, setSelectedCategory] = useState([]);

    useEffect(() => {
      let categoryService = new CategoryService();
      categoryService.getCategories().then((result) => setCategories(result.data));
    },[]);

    function handleClick(value) {
        setSelectedCategory(value)
        
      };

  return (
    <div>
        <ListBox optionLabel="name" optionValue='id' options={categories} onChange={(e)=>handleClick(e.value)} />
        <div>
            <h2>{selectedCategory}</h2>
        </div>
    </div>
  )
}
