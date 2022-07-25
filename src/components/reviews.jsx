import {useState, useEffect } from 'react'

import axios from 'axios'

import ReviewCard from './reviewCard'
import Categories from './categories';

export default function Reviews({selectCategory, categories, setCategories, setSelectCategory}){
    const [reviewList, setReviewList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        setIsLoading(true)
        axios.get(`https://my-be-nc-games.herokuapp.com/api/reviews?category=${selectCategory}`).then(res =>{
            setReviewList(res.data.reviews)
            setIsLoading(false)
        })
        },[selectCategory])

        return isLoading?<p>Loading...</p>:<main>
 <Categories categories={categories} setCategories={setCategories} setSelectCategory= {setSelectCategory}/>
<ul className='review-list'>
    {reviewList.map(review =>{
         return   <li key={review.review_id} ><ReviewCard review= {review}/></li>
        })}
        </ul>
    </main>
}
