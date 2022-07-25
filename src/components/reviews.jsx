import {useState, useEffect } from 'react'

import axios from 'axios'

import ReviewCard from './reviewCard'

export default function Reviews(){
    const [reviewList, setReviewList] = useState([]);
    useEffect(()=>{
        axios.get(`https://my-be-nc-games.herokuapp.com/api/reviews`).then(res =>{
            console.log(res.data)
            setReviewList(res.data.reviews)
        })
        },[])

        return <main>

<ul className='review-list'>
    {reviewList.map(review =>{
         return   <li key={review.review_id} ><ReviewCard review= {review}/></li>
        })}
        </ul>
    </main>
}
