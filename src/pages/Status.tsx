import './Status.css';
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import { FormEvent, useState, KeyboardEvent } from 'react';
import { PaperPlaneRight } from 'phosphor-react';

const answers = [
    'Teste',
    'Teste 2',
    'Teste 3',
]

export function Status() {
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
        'Teste 1',
        'Teste 2',
        'Teste 3'
    ])

    function createNewAnswer(event: FormEvent) {
        event.preventDefault();
        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
        if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setAnswers([newAnswer, ...answers])
            setNewAnswer('')
        }
    }

    return (
        <main className='status'>
            <Header title='Tweet'/>
            
            <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus atque, autem, quo nobis commodi accusantium et labore eaque fuga quia aperiam consequuntur ipsam nemo quos reiciendis a esse. Culpa."/>
            <Separator/>
            <form onSubmit={createNewAnswer} className="answer-tweet-form">
            <label htmlFor="tweet">
                <img src="https://github.com/PietroKucharski.png" alt="Pietro Kucharski"/>
                <textarea id='tweet' placeholder='Tweet your answer'  onChange={(event) => { setNewAnswer(event.target.value)}} onKeyDown={handleHotKeySubmit} value={newAnswer}/> 
            </label>

            <button type='submit'>
                <PaperPlaneRight/>
                <span>Answer</span>
            </button>
            </form>
            {answers.map(answer => {
                return <Tweet key={answer} content={answer}/>
            })}
        </main>
    )
}