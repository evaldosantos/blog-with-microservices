import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CommentList({ comments }) {
  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>
  })

  return (
    <div>
      {renderedComments}
    </div>
  )
}