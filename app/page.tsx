import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-170px)]">
      <h1 className="text-5xl font-semibold">
        Marshal<span className="text-blue-500">SaaS</span>
      </h1>
      <div className="mt-5">
        <Link className={buttonVariants()} href="/create">
          Create new Article
        </Link>
      </div>
    </div>
  );
}
