

export default function Projects() {
    return (
        <>
            <h1 className = "text-center text-xl font-medium p-8 text-sky-900">PROJECTS</h1>
            <div className = "flex flex-col sm:flex-row justify-center items-center">
                <a  href = "https://github.com/pritamshejul17/premierleague19" target = "_blank" className = "border-t-4 sm:border-r-4 border-white p-10 bg-gray-200 w-full sm:w-auto">
                    <h1 className = "text-center text-sky-900 text-xl font-medium px-2 pt-4">Premier League 19</h1>
                    <h4 className = "text-center text-sm p-2 text-gray-600">SELF PROJECT</h4>
                    <p className = "p-6 text-gray-800 text-center">Application where you can checkout <br/> 
                    your favourite team stats from 2018/19<br/>
                    season.</p>
                    <h1 className = "text-center p-2 border-y-2 border-white font-medium text-sky-900">Spring Boot, React JS</h1>
                </a>
                <a href =  "https://github.com/pritamshejul17/React-To-Do-App" target = "_blank" className = "border-t-4 sm:border-r-4 border-white p-10 bg-gray-200 w-full sm:w-auto">
                    <h1 className = "text-center text-sky-900 text-xl font-medium pt-4">To Do's App</h1>
                    <h4 className = "text-center text-sm p-2 text-gray-600">SELF PROJECT</h4>
                    <p className = "p-6 text-gray-800 text-center">Application to keep track of your <br/> 
                    day to day activities, built with<br/>
                    React JS.</p>
                    <h1 className = "text-center p-2 border-y-2 border-white font-medium text-sky-900">React JS, Tailwind CSS</h1>
                </a>
                <a href =  "https://github.com/pritamshejul17/VS_Clone" target = "_blank" className = "border-t-4 sm:border-r-4 border-white p-10 bg-gray-200 w-full sm:w-auto" >
                    <h1 className = "text-center text-sky-900 text-xl font-medium px-4 pt-4">VS Clone</h1>
                    <h4 className = "text-center text-sm p-2 text-gray-600">SELF PROJECT</h4>
                    <p className = "p-6 text-gray-800 text-center">Created clone of VS code website <br/> 
                    with HTML and Tailwind css, you<br/>
                    can checkout by clicking here.</p>
                    <h1 className = "text-center p-2 border-y-2 border-white font-medium text-sky-900">HTML, Tailwind CSS</h1>
                </a>
            </div>
            <h1 className = "text-center p-8 font-medium text-lg text-sky-900"><a href = "https://github.com/pritamshejul17/" target = "_blank" className = "" >Checkout More Here +</a></h1>
        </>
    );
}