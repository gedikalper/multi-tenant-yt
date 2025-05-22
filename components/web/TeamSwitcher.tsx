"use client";

import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export function TeamSwitcher({
  teams,
  activeOrg,
}: {
  teams: {
    name: string;
    orgCode: string;
  }[];
  activeOrg: {
    name: string;
    orgCode: string;
  };
}) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex w-full items-center gap-2 rounded-lg p-2 hover:bg-muted outline border">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground overflow-hidden">
              <img
                src={`https://avatar.vercel.sh/${activeOrg.name}`}
                alt={activeOrg.name}
                className="size-8"
              />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{activeOrg.name}</span>
            </div>
            <ChevronsUpDown className="ml-auto" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg "
          align="start"
          sideOffset={4}
        >
          <DropdownMenuLabel className="text-xs text-muted-foreground">
            Teams
          </DropdownMenuLabel>
          {teams.map((team, index) => (
            <DropdownMenuItem key={team.name} className="gap-2 p-2" asChild>
              <LoginLink orgCode={team.orgCode}>
                <div className="flex size-6 items-center justify-center rounded-sm border overflow-hidden">
                  <img
                    src={`https://avatar.vercel.sh/${team.name}`}
                    alt={team.name}
                    className="size-6"
                  />
                </div>
                {team.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </LoginLink>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2 p-2">
            <div className="flex size-6 items-center justify-center rounded-md border bg-background">
              <Plus className="size-4" />
            </div>
            <div className="font-medium text-muted-foreground">Add team</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
