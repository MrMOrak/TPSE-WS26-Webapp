import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { School, InsertDriveFile, Biotech, Monitor } from "@mui/icons-material";
import { Divider, List } from "@mui/material";
import Image from "next/image";
import NavItem from "./NavItem";
import Link from "next/link";

const navItems = [
  { label: "Teaching", href: "/teaching", icon: <School /> },
  { label: "Theses", href: "/theses", icon: <InsertDriveFile /> },
  { label: "Admin", href: "/admin", icon: <Monitor /> },
  { label: "Research", href: "/research", icon: <Biotech /> },
];

export default function Navigationbar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ width: "13vw", flexShrink: 0 }}>
        <Link href="/">
          <Image
            src="/tuda_logo_RGB.svg"
            width={200}
            height={40}
            alt="logo"
            priority
            unoptimized
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
        <Box sx={{ bgcolor: "#b9bbbd", height: "100vh" }}>
          <List disablePadding>
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </List>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem />
    </React.Fragment>
  );
}
