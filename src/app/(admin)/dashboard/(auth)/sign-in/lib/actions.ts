"use server";

import { ActionResult } from "@/app/types";
import { schemaSignIn } from "@/lib/schema";
import { redirect } from "next/navigation";
import prisma from "../../../../../../../lib/prisma";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import bcrypt from 'bcrypt'

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

    const existingUser = await prisma.user.findFirst({
        where: {
            email: validate.data.email
        }
    })

    if (!existingUser) {
        return {
            error: "email not found"
        }
    }

    const comparePassword = bcrypt.compareSync(validate.data.password, existingUser.password)

    if(!comparePassword) {
        return {
            error: "Email or password not valid"
        }
    }

    const session = await lucia.createSession(existingUser.id, {})
    const sessionCookie = lucia.createSessionCookie(session.id)
    ;(await cookies()).set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
    )

    return redirect('/dashboard')
}
