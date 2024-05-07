import React from 'react'
import CommentBox from './CommentBox'
import { useGoogleDocs } from '../GoogleDocsContext';

function Comments() {
    const { comments } = useGoogleDocs(); // Destructure comments from the returned object
    
    return (
        <div>
            <div className=''>
                <h1 className='mb-6 font-light text-2xl justify-center text-center' style={{color:'#14367B'}} > Assigned Comments</h1>
                <div className='px-6 '>
                    {/* Ensure comments is an array before using map */}
                    {Array.isArray(comments) && comments.map((comment, index) => (
                                        <CommentBox  key={index} author={comment.author} file={comment.fileName} text={comment.content} />
                                    ))}
                </div>
               
            </div>
        </div>
    )
}

export default Comments
