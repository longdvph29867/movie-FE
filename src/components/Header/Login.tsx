import { Link } from 'react-router-dom';
 
const Login = () => {
  return (
  <div className="flex items-center">
  <Link to={'/login'} className="font-semibold teext-sm text-white uppercase py-2.5 px-6 rounded-full bg-[#F27221] ml-3">login</Link>
  <button className="font-semibold teext-sm text-white uppercase py-2.5 px-6 rounded-full bg-[#F27221] ml-3">sign
    up</button>
</div>

  );
};

export default Login;