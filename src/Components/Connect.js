import github from '../img/github.png'
import linkedin from '../img/linkedin1.png'
import leetcode from '../img/leetcode1.png'
import mailto from '../img/mailto1.png'
export default function Connect() {
    return (
        <div className = "h-full p-6">
            <h1 className = "flex text-lg justify-center p-2 text-sky-900">Connect With Me!</h1>
            <ul className = "flex justify-center p-2">
                <a href = "https://github.com/pritamshejul17" target = "_blank"><img className = "h-10 w-10 rounded-full ml-4" alt ="github logo" src = {github}></img></a>
                <a href = "https://www.linkedin.com/in/pritam-shejul/" target = "_blank"><img className = "h-10 w-10 rounded-full ml-4" alt = "linkedin logo" src = {linkedin}></img></a>
                <a href = "https://leetcode.com/pritam17/" target = "_blank"><img className = "h-10 w-10 rounded-full ml-4 bg-gray-100 border-2 border-gray-400" alt = "" src = {leetcode}></img></a>
                <a href = "mailto:pritamshejul17@gmail.com"><img className = "h-10 w-10 rounded-full ml-4 " alt = "mailto logo" src = {mailto}></img></a>
            </ul>
        </div>
    );
}