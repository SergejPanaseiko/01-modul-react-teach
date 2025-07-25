import React from 'react'

const Message = ({ author="Incognito", text }) => {
  
  return (
    <div>
      <h3>{author}</h3>
      {author}
      <p>{text}</p>
        Message file
    </div>
  )
}

export default Message;
