import Posts from './Posts'
import Stories from './Stories'

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-md mx-auto px-4 mt-14'>
      <section className='col-span-2'>
        <Stories />
        <Posts />
      </section>

      <aside className=''>
        {/* Mini profile */}
        {/* Suggestins */}
      </aside>
    </main>
  )
}

export default Feed
