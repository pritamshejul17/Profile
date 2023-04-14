import github from '../img/github.png'
import linkedin from '../img/linkedin1.png'
import leetcode from '../img/leetcode1.png'
import mailto from '../img/mailto1.png'
export default function Connect() {
    return (
        <div className = "h-full p-6">
            <h1 className = "text-center text-sm p-1 py-2 text-stone-600 font-medium">Connect With Me!</h1>
            <ul className = "flex justify-center p-2">
                <a href = "https://github.com/pritamshejul17" target = "_blank"><img className = "h-8 w-8  ml-4" alt ="github logo" src = "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/github.svg"></img></a>
                <a href = "https://leetcode.com/pritam17/" target = "_blank"><img className = "h-8 w-8  ml-4 " alt = "" src = "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/leetcode.svg"></img></a>
                <a href = "https://www.linkedin.com/in/pritam-shejul/" target = "_blank"><img className = "h-8 w-8  ml-4" alt = "linkedin logo" src = "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/linkedin.svg"></img></a>
                <a href = "mailto:pritamshejul17@gmail.com"><img className = "h-8 w-8  ml-4 " alt = "mailto logo" src = "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/gmail.svg"></img></a>
            </ul>
        </div>
    );
}