import React, { useState } from 'react';
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import Avatar from "./Avatar"
import Comment from "./Comment"
import styles from "./Post.module.css"

export default function Post({author, publishedAt,content}) {
  const [comments, setComments] = useState([1,2])
  const [newCommentText, setNewCommentText] = useState('')

  const formattedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publisheDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true
  })


  function handleSubmit(event){
    event.preventDefault()

    try {
      setComments([...comments, newCommentText])  
    } catch (error) {
      console.log(error)
    } finally {
      setNewCommentText(' ')
    }

  }

  function handleNewCommentChange(event){
    event.target.setCustomValidity('') 
    setNewCommentText(event.target.value)
  }
  
  function handleNewCommentInvalid(event){
    event.target.setCustomValidity('Escreva um comentário')
  }

  function deleteComment(commentToDelete){
    setComments(comments.filter(comment => comment !== commentToDelete))
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>  
        </div>

        <time title={formattedDate}>
          {publisheDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(line=> {
            if(line.type === 'paragraph'){
              return <p key={line.content}>{line.content}</p>
            }else if (line.type === 'link'){
              return <a key={line.content} href="#">{line.content}</a>
            }
          })
        }
  
      </div>

      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <strong>Comentários</strong>
        <textarea 
          name="comment"
          placeholder="Escreva um comentário" 
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
          />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
          )}
          )
        }
      </div>
    </article>
  )
}
