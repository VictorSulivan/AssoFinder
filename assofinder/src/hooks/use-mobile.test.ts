
import { describe, expect, it, beforeEach, vi } from 'vitest'
// useIsMobile.test.tsx
import { renderHook } from "@testing-library/react"
import { useIsMobile } from "./use-mobile"

describe("useIsMobile", () => {
  beforeEach(() => {
    // Mock matchMedia
    vi.stubGlobal("matchMedia", (query: string) => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }
    })
  })

  it("should return true when window width < 768", () => {
    // Simule une fenêtre mobile
    vi.stubGlobal("innerWidth", 500)

    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(true)
  })

  it("should return false when window width >= 768", () => {
    vi.stubGlobal("innerWidth", 1000)

    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(false)
  })
})
