import React from "react"
import Post from "./components/Post"
import Header from "./components/Header"

import styles from "./App.module.css"
import "./global.css"
import Sidebar from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://i.pravatar.cc/150?img=1",
      name: "Julio Alcantara",
      role: "Software Engineer"
    },
    content:[
      {type:'paragraph', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
      {type:'paragraph', content:'Content 1'},
      {type:'link', content:'LINK'},
    ],
    publishedAt: new Date('2023-04-26 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://i.pravatar.cc/150?img=2",
      name: "Sergio",
      role: "Software Engineer"
    },
    content:[
      {type:'paragraph', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
      {type:'paragraph', content:'Content 2'},
      {type:'link', content:'LINK'},
    ],
    publishedAt: new Date('2023-04-25 20:00:00'),
  }
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              /> 
            )} 
          )}
        </main>
      </div>
    </>
  )
}

export default App
