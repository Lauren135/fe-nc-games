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
    },[])

    const selectedCategoryHandler = (event) => {
        setSelectCategory(event.target.value)
        }
        
        return isLoading?<p>Loading...</p>:<div className='filters-container'><label htmlFor="categories">Category:</label>
        <select name="categories" id="categories" onChange= {selectedCategoryHandler}>
            <option value = ''></option>
        {categories.map(category =>{
            return <option value = {category.slug} key={category.slug}>{category.slug} ({category.description})</option>
        })}
        </select>
        
        </div>
}