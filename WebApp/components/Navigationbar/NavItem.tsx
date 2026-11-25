"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type NavItemProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export default function NavItem({ label, href, icon }: NavItemProps) {
  const pathname = usePathname();

  return (
    <>
      <ListItemButton
        component={Link}
        href={href}
        selected={pathname.startsWith(href)}
        sx={{
          py: 2,
          "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.25)" },
          "&.Mui-selected:hover": { bgcolor: "rgba(255,255,255,0.3)" },
          "&.Mui-focusVisible": { bgcolor: "transparent" },
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          primary={label}
          slotProps={{ primary: { variant: "h6" } }}
        />
      </ListItemButton>
      <Divider />
    </>
  );
}
