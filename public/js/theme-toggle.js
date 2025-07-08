function applyThemeTransition() {
  const root = document.documentElement;
  root.classList.add("theme-transition");
  setTimeout(() => root.classList.remove("theme-transition"), 200);
}

export function initThemeToggle({ selector = "#theme-toggle" } = {}) {
  const button = document.querySelector(selector);
  if (!button) return;

  const updateIcon = () => {
    if (document.documentElement.classList.contains("dark")) {
      button.textContent = "light_mode";
    } else {
      button.textContent = "dark_mode";
    }
  };

  button.addEventListener("click", () => {
    applyThemeTransition();
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcon();
  });

  updateIcon();
}

if (typeof window !== "undefined") {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    applyThemeTransition();
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  }
  document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
  });
}
