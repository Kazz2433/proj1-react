import Avatar from "./Avatar"
import Comment from "./Comment"
import styles from "./Post.module.css"

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/kazz2433.png" />
          <div>
            <strong>Kelvin Quidá</strong>
            <span>Web Developer</span>
          </div>  
        </div>

        <time title="11 de maio as 8:13" dateTime="2022-05-11 08:13:38">Publicado a 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="#">jane.design/doctorcare</a></p>

        <p>
          <a href="#">#novoprojeto </a>
          <a href="#">#nlw </a>
          <a href="#">#rocketseat</a>
        </p>
  
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
