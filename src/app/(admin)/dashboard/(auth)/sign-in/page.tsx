import { getUser } from "@/lib/auth";
import { LoginForm } from "./_components/form";
import React from "react";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const {session, user} = await getUser()

  if(session && user.role === "admin"){
    return redirect("/dashboard")
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
