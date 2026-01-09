import { describe, it, expect } from "vitest"
import { cn } from "./utils"

describe("cn", () => {
  it("merge les classes simplement", () => {
    expect(cn("p-2", "m-4")).toBe("p-2 m-4")
  })

  it("ignore les valeurs falsy", () => {
    expect(cn("p-2", false, undefined, null, "m-4")).toBe("p-2 m-4")
  })

  it("fusionne correctement les classes tailwind en conflit", () => {
    // twMerge doit garder "p-4" et supprimer "p-2"
    expect(cn("p-2", "p-4")).toBe("p-4")
  })

  it("accepte des objets façon clsx", () => {
    expect(cn("p-2", { "text-red-500": true, hidden: false })).toBe(
      "p-2 text-red-500"
    )
  })

  it("fonctionne avec des tableaux imbriqués", () => {
    expect(cn("p-2", ["m-2", ["text-sm"]])).toBe("p-2 m-2 text-sm")
  })
})
