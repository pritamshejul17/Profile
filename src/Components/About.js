export default function About() {
    return (
        <>
            <div className = 'flex justify-center'>
            <div  className = "text-center sm:w-2/3 shadow-md p-6 py-10 mt-10 bg-slate-100 text-gray-600 rounded-md">
                <h1 className = "text-xl p-4 font-medium text-sky-900">About Me</h1>
                <p  className = "">
                    Hi I'm Pritam, I am a software engineer with bachelor's in information technology <br />
                    My areas of expertise include web development with frameworks & libraries<br />
                    like <span className = "font-medium text-sky-900">Spring (Spring Boot, Spring MVC, Spring Data JPA, Spring Security)</span> & for <br />
                    frontend <span className = "font-medium text-sky-900">React JS</span> and related libraries, you can checkout my personal <br />
                    projects on my <a href = "https://github.com/pritamshejul17/" target = "_blank" className = "font-medium text-sky-900" >Github</a>
                </p>
                <h1 className = "p-6 mt-2">Thank you for your time visitng my profile, you can reach out to me at <a href = "mailto:pritamshejul17@gmail.com" className = "font-medium text-sky-900">pritamshejul17@gmail.com</a>
                </h1>

                <h1 className = "pt-4 font-medium text-sky-900">Have a Nice Day!</h1>
            </div>
            </div>
        </>
    );
}