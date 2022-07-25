import {Link} from 'react-router-dom'

export default function Navigation(setSelectCategory){

    return <nav>
        <div className='link-container'>

        <Link to='/' onClick={()=>{setSelectCategory('')}}>All Reviews</Link>

        </div>
        
    </nav>
}