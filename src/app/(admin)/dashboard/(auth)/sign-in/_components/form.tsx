"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { useActionState } from "react";
import { SignIn } from "../lib/actions";
import { useFormStatus } from "react-dom";
import { AlertCircle } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

const initialState = {
  error: "",
};

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { pending } = useFormStatus();
  const [state, formAction] = useActionState(SignIn, initialState);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-primaryColor">
                  HolidayPlanner
                </h1>
                <p className="text-balance text-muted-foreground">
                  Login to your account
                </p>
              </div>
              <div className="grid gap-2">

                {state.error !== "" && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      {state.error}
                    </AlertDescription>
                  </Alert>
                )}

                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="py-2 px-3 text-sm"
                  placeholder="youraccount@example.com"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-xs underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  className="text-sm px-3 py-2"
                  placeholder="***********"
                />
              </div>
              <Button
                disabled={pending}
                type="submit"
                className="w-full bg-primaryColor hover:bg-blue-700 font-semibold"
              >
                Login
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <FaApple />
                  <span className="sr-only">Login with Apple</span>
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle />
                  <span className="sr-only">Login with Google</span>
                </Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-primaryColor hover:underline hover:"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
