import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-semibold text-3xl my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 p-3 text-white rounded-lg hover:opacity-95 disabled:opacity-80">
          SIGN UP
        </button>
      </form>
      <div className="flex gap-3 my-4">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700 font-semibold">Sign In</span>
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
