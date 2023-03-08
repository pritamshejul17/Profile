import profile from '../img/profile.JPG'
export default  function Nav() {
    return (
    <nav className = "flex justify-center pt-10 pb-4 border-b-2 border-blacks mx-40">
        <a href = "#" className = "text-lg font-normal ml-10">Home</a>
        <a href = "#" className = "text-lg font-normal ml-10">Projects</a>
        <a href = "#" className = "text-lg font-normal ml-10">Resume</a>
        <a href = "#" className = "text-lg font-normal ml-10">About</a>
    </nav>
    );
}