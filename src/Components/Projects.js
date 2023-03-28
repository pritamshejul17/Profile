

export default function Projects() {
    return (
        <>
            <h1 className = "text-center text-xl font-medium p-8 text-stone-600">PROJECTS</h1>
            <div className = "flex flex-col sm:flex-row justify-center items-center">
                <a  href = "https://github.com/pritamshejul17/premierleague19" target = "_blank" className = " shadow-lg  rounded-lg bg-slate-100   p-10  w-full sm:w-auto">
                    <h1 className = "text-center text-sky-900 text-xl font-medium px-2 pt-4">Premier League 19</h1>
                    <h4 className = "text-center text-sm p-2 text-gray-600">SELF PROJECT</h4>
                    <p className = "p-6 text-gray-800 text-center">Application where you can checkout <br/> 
                    your favourite team stats from 2018/19<br/>
                    season.</p>
                    <h1 className = "text-center p-2 border-y-2 border-white font-medium text-sky-900">Spring Boot, React JS</h1>
                </a>
                <a href =  "https://github.com/pritamshejul17/E-Commerce" target = "_blank" className = " sm:ml-6  mt-10 sm:mt-0  shadow-lg rounded-lg bg-slate-100   p-10  w-full sm:w-auto">
                    <h1 className = "text-center text-sky-900 text-xl font-medium pt-4">E-Commerce</h1>
                    <h4 className = "text-center text-sm p-2 text-gray-600">SELF PROJECT</h4>
                    <p className = "p-6 text-gray-800 text-center">E-commerce frontend application <br/> 
                    with all features, built with<br/>
                    React JS.</p>
                    <h1 className = "text-center p-2 border-y-2 border-white font-medium text-sky-900">React JS, Tailwind CSS</h1>
                </a>
                <a href =  "https://github.com/pritamshejul17/VS_Clone" target = "_blank" className = "-lg rounded-lg bg-slate-100 mt-10 sm:mt-0  sm:ml-6  p-10  w-full sm:w-auto" >
                    <h1 className = "text-center text-sky-900 text-xl font-medium px-4 pt-4">VS Clone</h1>
                    <h4 className = "text-center text-sm p-2 text-gray-600">SELF PROJECT</h4>
                    <p className = "p-6 text-gray-800 text-center">Created clone of VS code website <br/> 
                    with HTML and Tailwind css<br/>
                    checkout here.</p>
                    <h1 className = "text-center p-2 border-y-2 border-white font-medium text-sky-900">HTML, Tailwind CSS</h1>
                </a>
            </div>
            <h1 className = "text-center p-8 font-medium text-lg text-stone-600"><a href = "https://github.com/pritamshejul17/" target = "_blank" className = "" >Checkout More Here +</a></h1>
        </>
    );
}