import React from 'react'

/*import { getPayloadHMR } from '@payloadcms/next/utilities'*/
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import MovieCards from '@/components/MovieCards';


const Page = async () => {
  const payload = await getPayload({ config: configPromise })

  const movies = await payload.find({
    collection: 'movies',
    sort: '-votes',
  })

  return (
    <>
      <main className="mt-5">
        <MovieCards movies={movies.docs} />
      </main>
    </>
  )
}

export default Page