import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import RegisterForm from "src/components/account/RegisterForm";


export const Route = createRootRoute({
  component: () => (
    <div className="relative flex flex-col w-full h-screen">
      
      
      {/* <Seatmap screeningsId={3} /> */}
      <Outlet />
      <TanStackRouterDevtools />
      <RegisterForm/>
      
    </div>
  ),
});
