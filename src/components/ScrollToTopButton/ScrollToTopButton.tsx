"use client"
import { useEffect, useState } from "react"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false)
    }
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      })
  }

  return (
    <button
      className={`fixed z-10 bottom-4 md:bottom-8 right-4 md:right-12 rounded-full px-4 py-3 outline-none transition-opacity duration-200 bg-gradient-to-tr from-orange-600 to-orange-400 hover:from-orange-400 hover:to-orange-600 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <i className="ri-arrow-up-s-line ri-lg"></i>
    </button>
  )
}

export default ScrollToTopButton