import { FormEvent, useState } from "react";
import { Tweet } from "../components/Tweet";
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';

import './Timeline.css'


export function Timeline() {

  const [ newTweet, setNewTweet ] = useState('')
  const [ tweets, setTweets ] = useState([
    'My favorite tweet',
    'Your favorite tweet',
    'Congratulations for my favorite tweet'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([ newTweet, ...tweets ])
    setNewTweet('')
  }


  return (
    <main className="timeline">
      <Header titter="Home" />

        <form onSubmit={createNewTweet} className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/Frankdias92.png" alt="" />

            <textarea 
              id="tweet" 
              placeholder="What's happening?"
              value={newTweet}
              onChange={(event) => {
                setNewTweet(event.target.value)
              }}
            />

          </label>

          <button type="submit">Tweet</button>
        </form>

        <Separator />

        {tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet} />
        })}
        
    </main>
  )
}