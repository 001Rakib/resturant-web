import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <div className="divider px-6"></div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FcGoogle></FcGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
