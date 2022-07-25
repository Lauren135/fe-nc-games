

export default function ReviewCard({review}){
return <div className='review-card-container'>
<span className="review-title">{review.title}</span>
<span className="review-body">{review.review_body}</span>
</div>
}
