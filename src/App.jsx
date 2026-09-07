import { useEffect, useState } from "react";
import { Header, Footer, Loader } from "./Component";
import { Outlet } from "react-router";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { logout, login } from "./store/authSlice";
import configure from "./appwrite/configure";
import { createTodo } from "./store/projectSlice";

function App() {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .authenticationState()
      .then((data) => {
        if (data) {
          dispatch(login(data));
        } else {
          dispatch(logout());
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
