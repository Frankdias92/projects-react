import { ChatCircle, ArrowsClockwise, Heart } from '@phosphor-icons/react'
import './Tweet.css'
import { Link } from 'react-router-dom'


interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link className="tweet" to='/status'>
      <img src="https://github.com/Frankdias92.png" alt="" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Franklin</strong>
          <span>@FrankMcdias</span>
        </div>
      
        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            32
          </button>

          <button type="button">
            <ArrowsClockwise  />
            18
          </button>
          
          <button type="button">
            <Heart />
            200
          </button>
        </div>
      </div>
    </Link>
  )
}