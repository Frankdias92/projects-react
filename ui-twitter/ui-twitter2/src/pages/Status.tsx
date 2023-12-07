import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'


import './Status.css'


const answers = [
  'I agree...',
  'I don"t understand this',
  'Look at the comments on this page and see',
  'Congratulations for your progress'
]

export function Status() {
  return (
    <main className="Status">
      <Header titter="Tweet" />
      
        <Tweet content='Lorem ipsum dolor sit, amet consectetur adipisicing elit.' />

        <Separator />


        <form className="answer-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/Frankdias92.png" alt="" />
            <textarea id="tweet" placeholder="Tweet your answer" />
          </label>

          <button type="submit">Answer</button>
        </form>


        {answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })}
        

    </main>
  )
}