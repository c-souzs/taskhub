import { createContext } from "react";
import { loginUser } from "../../service/user";
import { Outlet, useNavigate } from "react-router-dom";
import { UserLogin } from "../../types/user";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";

type AuthContextType = {
  // user: {
  //   email: string;
  // };
  login: {
    fnLogin: (data: UserLogin) => void;
    isPending: boolean;
    isError: boolean;
    error: Error | null;
  }
  // logout: () => void;
  // getAllTagsByUser: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType );

export const AuthProvider = () => {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(['token-taskhub']);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setCookie("token-taskhub", data.data.token);
      navigate("/app");
    }
  })

  const fnLogin = (data: UserLogin) => {
    const { email, password } = data;
    mutate({ email, password });
  }

  return (
    <AuthContext.Provider value={{ login: { fnLogin, isPending, isError, error } } }>
      <Outlet />
    </AuthContext.Provider>
  )
}