"use server"

import { ActionResult } from "@/app/types";
import { getUser, lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const Logout = async (
  _: unknown,
  formData: FormData
): Promise<ActionResult> => {

    const {session} = await getUser()

    if(!session){
        return {
            error: "Unauthorized"
        }
    }

    await lucia.invalidateSession(session.id)

    const sessionCookie = lucia.createBlankSessionCookie()

    ;(await cookies()).set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
    )

  return redirect("/dashboard/sign-in");
};