import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
// interface propTypes {
//   children: React.Component;
//   user: boolean;
//   redirect: string;
// }
interface MyComponentProps {
  children: ReactNode;
  user: boolean;
  redirect: string;
}

const ProtectedRoute: React.FC<MyComponentProps> = ({
  children,
  user,
  redirect,
}) => {
  if (!user) {
    return <Navigate to={redirect}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
