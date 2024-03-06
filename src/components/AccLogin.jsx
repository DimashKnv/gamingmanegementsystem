export function AccLogin(props){
    return <div className="accLogin">
        <input type="text" placeholder="Your Login"/>
        <input type="text" placeholder="Your password"/>
        <button className="enterBtn">Enter</button>
        <button className="changeLogBtn" onClick={()=>{props.setwasPressed(true)}}>I have a code</button>
    </div>
}