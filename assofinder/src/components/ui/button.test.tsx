import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Button, buttonVariants } from "./button"

describe("Button component", () => {
  it("render un bouton avec les classes par défaut", () => {
    render(<Button>Click me</Button>)

    const btn = screen.getByRole("button")
    expect(btn).toBeInTheDocument()

    // cva retourne une string — on peut donc vérifier qu'elle est incluse
    const expected = buttonVariants()
    expect(btn.className).toContain(expected)
  })

  it("applique une variante via props", () => {
    render(<Button variant="destructive">Delete</Button>)

    const btn = screen.getByRole("button")

    // Vérifie que les classes destructives principales sont présentes
    expect(btn).toHaveClass("bg-destructive")
    expect(btn).toHaveClass("text-white")
    expect(btn).toHaveClass("hover:bg-destructive/90")
  })


  it("applique une taille via props", () => {
    render(<Button size="lg">Big</Button>)

    const btn = screen.getByRole("button")

    expect(btn).toHaveClass("h-10")
    expect(btn).toHaveClass("px-6")
    expect(btn).toHaveClass("has-[>svg]:px-4")
  })


  it("fusionne correctement className avec cva + cn", () => {
    render(<Button className="extra-class">Test</Button>)

    const btn = screen.getByRole("button")
    expect(btn.className).toContain("extra-class") // la classe personnalisée
  })

  it("rend un Slot si asChild=true", () => {
    render(
      <Button asChild>
        <a href="/test">Link</a>
      </Button>
    )

    const link = screen.getByRole("link")
    expect(link).toBeInTheDocument()
    expect(link.dataset.slot).toBe("button") // l’attribut est bien passé
  })
})
