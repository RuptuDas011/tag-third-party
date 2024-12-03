'use client'

import { sendGTMEvent } from '@next/third-parties/google'
import { YouTubeEmbed } from '@next/third-parties/google'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Next Third Party</h1>

        <section className='mt-12'>
          <h2 className='text-xl font-semibold'>Google Tag Manager</h2>
          <button
            className='mt-4 rounded bg-sky-500 px-4 py-2 text-white'
            onClick={() =>
              sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })
            }
          >
            Send Event
          </button>
        </section>

        <section className='mt-12'>
          <h2 className='mb-4 text-xl font-semibold'>YouTube Embed</h2>
          <YouTubeEmbed
            height={400}
            videoid='Pz8CAbeg6Q0'
            params='controls=0'
          />
        </section>
      </div>
    </section>
  )
}
