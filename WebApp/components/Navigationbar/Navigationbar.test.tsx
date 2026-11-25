import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Navigationbar from "./Navigationbar";

vi.mock("next/navigation", () => ({
  usePathname: () => "/teaching",
}));

describe("Navigationbar", () => {
  it("zeigt alle Hauptbereiche", () => {
    render(<Navigationbar />);
    expect(screen.getByText("Teaching")).toBeInTheDocument();
    expect(screen.getByText("Theses")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(screen.getByText("Research")).toBeInTheDocument();
  });

  it("verlinkt die Einträge auf die richtigen Seiten", () => {
    render(<Navigationbar />);
    expect(screen.getByRole("link", { name: /teaching/i })).toHaveAttribute("href", "/teaching");
    expect(screen.getByRole("link", { name: /theses/i })).toHaveAttribute("href", "/theses");
  });

  it("markiert den aktuellen Bereich als aktiv", () => {
    render(<Navigationbar />);
    expect(screen.getByRole("link", { name: /teaching/i })).toHaveClass("Mui-selected");
    expect(screen.getByRole("link", { name: /theses/i })).not.toHaveClass("Mui-selected");
  });
});