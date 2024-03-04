import React, { useContext } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AuthContext from "../config/context/auth-context"
import SigninPage from "../modules/SigninPage"
import AdminLayout from "../layout/AdminLayout";
import UserLayout from "../layout/UserLayout";
import ClientLayout from "../layout/ClientLayout";

export const AppRouter = () => {
    const { user } = useContext(AuthContext); //context = payload -> /api/auth
    //toda la aplicacion sabe que datos de mi usuario tengo disponible
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                {user?.signed ? (
                    <>
                        <Route path="/" element={<AdminLayout />} />
                        <Route path="/usuario" element={<UserLayout />} />
                        <Route path="/cliente" element={<ClientLayout />} />
                    </>
                ) : (
                    <Route path="/" element={<SigninPage />} />
                )}
                <Route path="*" element={<>404</>} />
            </>
        )
    );
    return <RouterProvider router={router} />;
};

export default AppRouter;


