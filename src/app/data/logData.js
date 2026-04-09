import { useEffect} from "react";
import { useDispatch} from "react-redux";
import { setUsers ,addUser,setVerUser,setMessage} from "../redux/logSlice";
import api from '../../api/axios';
// import {jwtDecode} from "jwt-decode";
export  function useLog(){
  
    const dispatch = useDispatch()
    useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("users");
        const mapped = res.data.map(b => ({
          id: b.id,
          username: b.username ?? "",
          email: b.email ?? "",
        }));
        // dispatch(setUsers(mapped)) ;
        
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
     fetchUsers();
    
    }, []);
    
    useEffect(()=>{ },[]);
    const addUsers = async (users) => {
    const res = await api.post(
    "/register",{
          username: users.username ?? "",
          email: users.email ?? "",
          password: users.password ?? "",
          password_confirmation: users.password_confirmation ?? ""
    }
    );
    
    console.log(res.data)
    // dispatch(addUser(res.data)); 
    dispatch(setMessage(res.data.message))  };

  const verUser = async (user) => {
    // console.log(email,password)
     try {
    const res = await api.post("/login",
       { email:user.email ,password:user.password },
      );
      // console.log(res.data)
      if(res.data.user && res.data.token){
       localStorage.setItem('token', JSON.stringify(res.data.token));
       localStorage.setItem('user', JSON.stringify(res.data.user));
      }
      // const token = localStorage.getItem("token");
      // if(res.data.token){
      // const data = jwtDecode(res.data.token);
      // console.log(data);
      // }
      console.log(res.data)
      dispatch(setMessage(res.data.message))
      // return res.data; 
  } catch (err) {
    console.error(err.response?.data);
  }
   
  }; 
  return {addUsers,verUser}
}

