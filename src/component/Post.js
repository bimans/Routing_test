import React from 'react';
import {Link} from 'react-router-dom';

const Post=()=>{
    return(
        <div className='panel panel-danger'>
            <div class='panel-heading'>
                <h3>Post page</h3>
            </div>
            <div className='panel-body'>
                <p>Post is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

            <h3>Java Script</h3>
            <Link to="/post/Javascript">Details</Link>
            <h3>React</h3>
            <Link to="/post/React">Details</Link>
            <h3>Node</h3>
            <Link to ='/post/Node'>Details</Link>

            </div>

        </div>
    )
}

export default Post;