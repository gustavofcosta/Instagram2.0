import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'mushashi',
    userImg: '/women.jpg',
    img: '/dog.jpg',
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    id: '123',
    username: 'mushashi',
    userImg: '/women.jpg',
    img: '/dog.jpg',
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  }
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          id={post.id}
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption} />
      ))}
    </div>
  )
}

export default Posts
