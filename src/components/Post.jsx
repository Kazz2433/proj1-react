import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import Avatar from "./Avatar"
import Comment from "./Comment"
import styles from "./Post.module.css"

export default function Post({author, publishedAt,content}) {
  const formattedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publisheDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true
  })

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
              return <p>{line.content}</p>
            }else if (line.type === 'link'){
              return <a href="#">{line.content}</a>
            }
          })
        }
  
      </div>

      <form className={styles.commentForm}>
        <strong>Comentários</strong>
        <textarea placeholder="Escreva um comentário"/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
