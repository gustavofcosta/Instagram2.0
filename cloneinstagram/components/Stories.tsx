import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import Story from './Story';

interface Props {
  id: number,
  name: string,
  avatar: string,
}


function Stories() {

  const [suggestions, setSuggestions] = useState<any>([])

  useEffect(() => {

    const suArray = []

    for (let i = 1; i < 21; i++) {


      const suggestions = {
        id: i,
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
      }

      suArray.push(suggestions)

    }

    setSuggestions(suArray)
  }, [])




  return (
    <div className='flex space-x-3 p-3 bg-white mt-5 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {suggestions.map((profile: Props) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.name}
        />
      ))}
    </div>
  )
}

export default Stories
