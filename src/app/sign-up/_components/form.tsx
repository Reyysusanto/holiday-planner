import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-primaryColor">
                  HolidayPlanner
                </h1>
                <p className="text-balance text-muted-foreground">
                  Regist your account to access
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  className="py-2 px-3 text-sm"
                  placeholder="youraccount@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="text-sm px-3 py-2"
                  placeholder="***********"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Confirm Password</Label>
                <Input
                  id="password"
                  type="confirmPassword"
                  required
                  className="text-sm px-3 py-2"
                  placeholder="***********"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primaryColor hover:bg-blue-700 font-semibold"
              >
                Sign Up
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-primaryColor hover:underline">
                  Sign In
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