import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import Avatar from "./Avatar"

export default function Comment({content,onDeleteComment}) {
    function handleDeleteComment(){
        onDeleteComment(content)
    }
  
    return (
    <div className={styles.comment}>
        <Avatar hasborder={false} src="https://github.com/kazz2433.png" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Kelvin Quidá</strong>
                        <time title="11 de maio as 8:13" dateTime="2022-05-11 08:13:38">Publicado a 1h</time>
                    </div>

                    <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={24} />
                    </button>
                </header>
                <p>{content}</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    </div>
  )
}
