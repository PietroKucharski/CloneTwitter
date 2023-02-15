import { ChatCircle, ArrowsClockwise, Heart } from "phosphor-react"
import { Link } from 'react-router-dom'
import './Tweet.css'

interface TweetProps {
    content: string;

}

export function Tweet(props: TweetProps) {
    return (
        <Link to='/status' className="tweet">
            <img src="https://github.com/PietroKucharski.png" alt="Pietro Kucharski" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Pietro Kucharski</strong>
                    <span>@PietroKucharski</span>
                </div>
                
                <p>{props.content}</p>

                <div className="tweet-content-footer">
                    <button type='button'>
                        <ChatCircle/>
                        20
                    </button>

                    <button type='button'>
                        <ArrowsClockwise/>
                        20
                    </button>

                    <button type='button'>
                        <Heart/>
                        20
                    </button>
                </div>
                

            </div>
        </Link>
    )
}