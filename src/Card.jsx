import Profilepic from "./assets/Profile.jpg"
export default function card(){
    return(
        <div className="card">
            <img className="img" src={Profilepic} alt="Profile picture"></img>
            <h2 className="card-tittle">SALIK JAVID</h2>
            <p className="card-text">I am a React developer</p>
            <button className="follow-btn">Follow</button>

        </div>
    );

}