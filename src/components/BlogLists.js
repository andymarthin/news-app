import React from 'react'

export default function BlogList ({article}) {
  return (
      <div>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
      </div>
    )
}
