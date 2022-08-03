import { useDispatch } from "react-redux";
import { authActions } from "../features/Auth/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Username</label>
        <input type="text" name="username" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
