import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import { useState, FormEvent, KeyboardEvent } from 'react'


import './Status.css'
import { PaperPlaneRight } from '@phosphor-icons/react'


export function Status() {

  const [ newAnswer, setNewAnswer ] = useState('')
  const [ answers, setAnswers ] = useState([
    'I agree...',
    'I don"t understand this',
    'Look at the comments on this page and see',
    'Congratulations for your progress'
  ])
  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([ newAnswer, ...answers ])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([ newAnswer, ...answers ])
      setNewAnswer('')
    }
  }
  
  return (
    <main className="Status">
      <Header titter="Tweet" />
      
        <Tweet content='Lorem ipsum dolor sit, amet consectetur adipisicing elit.' />

        <Separator />


        <form onSubmit={createNewAnswer} className="answer-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/Frankdias92.png" alt="" />

            <textarea 
              id="tweet"
              value={newAnswer}
              onKeyDown={handleHotKeySubmit}
              placeholder="Tweet your answer"
              onChange={(event) => {
                setNewAnswer(event.target.value)
              }}
            />

          </label>

          <button type="submit">
            <PaperPlaneRight />
            <span>Answer</span>
          </button>
        </form>


        {answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })}
        
    </main>
  )
}