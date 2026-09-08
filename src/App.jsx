import { useEffect, useState } from "react";
import { Header, Footer, Loader } from "./Component";
import { Outlet, useNavigate } from "react-router";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { logout, login } from "./store/authSlice";
import configure from "./appwrite/configure";
import { createTodo } from "./store/projectSlice";
import { createTask } from "./store/taskSlice";


function App() {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  useEffect(() => {
    authService
      .authenticationState()
      .then((data) => {
        if (data) {
          dispatch(login(data));
          navigate("/")
        } else {
          dispatch(logout());
          navigate("/login")
        }
      })
      .finally(() => setLoader(false));
  }, []);

  useEffect(() => {
    configure
      .getAllProject()
      .then((data) => {
        if (data) {
          dispatch(createTodo(data.documents));
        }
      })
      .finally(() => setLoader(false));
  }, []);

  useEffect(()=>{
    configure.getAllTask().then((data)=>{
      if(data){
        dispatch(createTask(data.documents))
      }
    }).finally(()=>setLoader(false));
  },[])


  return loader ? (
    <Loader />
  ) : (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
