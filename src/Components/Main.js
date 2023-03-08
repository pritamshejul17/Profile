import profile from '../img/profile.JPG'
export default function Main() {
    return (
        <main className = "flex justify-evenly mt-6">
            <div className = "flex flex-col justify-center p-12 text-gray-600">
                <h1 className = "flex text-3xl font-normal text-sky-900 justify-center mb-3">Pritam Shejul</h1>
                <p className = "text-center p-4 text-lg">Hi I'm Pritam! I am a software engineer with bachelor's in information<br />technology,
                I love building web appplications & I am  <br />passionate about solving real world problems.</p>
            </div>
            <div>
                <img src = {profile} alt ="" className = "h-80 w-80 rounded-full p-2"/>
            </div>
        </main>
    );
}