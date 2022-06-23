import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-5 max-w-2xl mx-auto px-4 mt-16'>
      <section className='col-span-4'>
        <Stories />
        <Posts />
      </section>

      <aside className='hidden md:inline-grid md:col-span-1'>
        <MiniProfile />
        <Suggestions />
      </aside>
    </main>
  )
}

export default Feed
