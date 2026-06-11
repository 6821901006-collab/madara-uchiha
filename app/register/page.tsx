export default function Register() {
  return (
    <div  className="auth-page">
      <form className="auth-card">
        <h2> สมัครสมาชิก </h2>
        <input placeholder='Name' type='text'/>
        <li/>
        <input placeholder='Email' type="email"/>
        <button>Register</button>
      </form>
    </div>
  );
}