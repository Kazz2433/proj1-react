import Avatar from "./Avatar"
import styles from "./Sidebar.module.css"
import {PencilLine} from "phosphor-react"

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://via.placeholder.com/150" alt="placeholder" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/kazz2433.png" />
        
        <strong>Kelvin Quidá</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
        <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>

  )
}
