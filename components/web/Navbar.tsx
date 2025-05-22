import Link from "next/link";

import { Button } from "../ui/button";
import { TeamSwitcher } from "./TeamSwitcher";

export async function Navbar() {
  const user = true;

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
              teams={[
                {
                  name: "Test",
                  orgCode: "test",
                },
                {
                  name: "Test2",
                  orgCode: "test2",
                },
              ]}
              activeOrg={{
                name: "Test",
                orgCode: "test",
              }}
            />
            <Button>Logout</Button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Button variant={"outline"}>Login</Button>
            <Button>Register</Button>
          </div>
        )}
      </div>
    </div>
  );
}
