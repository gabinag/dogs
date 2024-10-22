{/*Protege a rota user, exibindo-a apenas se o usuário estiver logado*/}
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
  const { login } = useContext(UserContext);
  if(login === true) {
    return children
  } else if (login === false) {
    <Navigate to="/login"/>
  } else {
    return <></>
  }
}
