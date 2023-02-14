import { ChatCircle, ArrowsClockwise, Heart } from "phosphor-react"
import './Tweet.css'

export function Tweet() {
    return (
        <a href='' className="tweet">
            <img src="https://github.com/PietroKucharski.png" alt="Pietro Kucharski" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Pietro Kucharski</strong>
                    <span>@PietroKucharski</span>
                </div>
                
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nihil facilis veritatis accusantium dicta et.
                    <br />
                    Officiis, quisquam ab eveniet ratione harum alias corrupti molestiae deleniti ipsam, vero omnis sapiente deserunt.
                    <br />
                </p>

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
        </a>
    )
}