import Link from "next/link";

import { buttonVariants } from "../ui/button";
import { TeamSwitcher } from "./TeamSwitcher";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Navbar() {
  const { getUser, getOrganization, getUserOrganizations } =
    getKindeServerSession();
  const user = await getUser();
  const organization = await getOrganization();
  const userOrganizations = await getUserOrganizations();

  console.log("userOrganizations", userOrganizations);
  console.log("signed into!", organization);

  return (
    <div className="w-full flex items-center justify-between py-5">
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Marshal<span className="text-blue-500">SaaS</span>
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/create">Create</Link>
        </div>
      </div>
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            <TeamSwitcher
              teams={
                userOrganizations?.orgs.map((org) => ({
                  name: org.name ?? "",
                  orgCode: org.code ?? "",
                })) ?? []
              }
              activeOrg={{
                name: organization?.orgName ?? "",
                orgCode: organization?.orgCode ?? "",
              }}
            />
            <LogoutLink className={buttonVariants()}>Logout</LogoutLink>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <LoginLink className={buttonVariants({ variant: "outline" })}>
              Login
            </LoginLink>
            <RegisterLink className={buttonVariants()}>Register</RegisterLink>
          </div>
        )}
      </div>
    </div>
  );
}
