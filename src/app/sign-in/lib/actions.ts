"use server";

import { ActionResult } from "@/app/types";
import { schemaSignIn } from "@/lib/schema";
import { redirect } from "next/navigation";

export async function SignIn(
    _: unknown, 
    formData: FormData
): Promise<ActionResult> {

    const validate = schemaSignIn.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    })

    if(!validate.success) {
        return {
            error: validate.error.errors[0].message
        }
    }

    console.log(formData.get('email'))

    return redirect('/home')
}
