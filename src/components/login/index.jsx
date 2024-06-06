import
React,
{
    useContext,
    useEffect,
    useRef,
    useState
} from 'react'
import AuthContext from '../../services/context/AuthProvider';

export default function Login() {

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [success, setSuccess] = useState();

    useEffect(() => {
        userRef.current.focus(); 
    }, [])
    

    useEffect(() => {
        setErrorMessage("");

    },[user, password])

  return (
      <>
      </>
  )
}
