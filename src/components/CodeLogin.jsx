export function CodeLogin(props) {
  return (
    <div className="accLogin">
      <input type="text" placeholder="Your code" />
      <button className="enterBtn">Enter</button>
      <button
       className="changeLogBtn"
        onClick={() => {
          props.setwasPressed(false);
        }}
      >
        I have account
      </button>
    </div>
  );
}
