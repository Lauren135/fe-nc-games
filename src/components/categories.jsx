import {useEffect, useState} from 'react'
import axios from 'axios'

export default function Categories({setSelectCategory,categories,setCategories}){
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setIsLoading(true)
    axios.get(`https://my-be-nc-games.herokuapp.com/api/categories`).then(res =>{
        setCategories(res.data.categories)
        setIsLoading(false)
    })
    },[setCategories])

    const selectedCategoryHandler = (event) => {
        setSelectCategory(event.target.value)
        }
        
        return isLoading?<p>Loading...</p>:<div className='filters-container'>
            <label htmlFor="categories">Category:</label>
        <select name="categories" id="categories" onChange= {selectedCategoryHandler}>
            <option value = ''></option>
        {categories.map(category =>{
            const cat = category.slug.charAt(0).toUpperCase()+category.slug.slice(1) 
            return <option value = {category.slug} key={category.slug}>{cat}</option>
        })}
        </select>
        
        </div>
}