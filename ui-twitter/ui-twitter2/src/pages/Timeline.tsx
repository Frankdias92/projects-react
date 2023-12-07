import { Tweet } from "../components/Tweet";
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';

import './Timeline.css'


export function Timeline() {
  return (
    <main className="timeline">
      <Header titter="Home" />

        <form className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/Frankdias92.png" alt="" />
            <textarea id="tweet" placeholder="What's happening?" />
          </label>

          <button type="submit">Tweet</button>
        </form>

        <Separator />

        <Tweet />
        <Tweet />         
    </main>
  )
}