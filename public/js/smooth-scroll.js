function smoothScrollTo(targetY, duration = 500) {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const t = Math.min(elapsed / duration, 1); // [0,1] に正規化

    // // easeInOutSine: -(cos(πt) - 1) / 2
    // const ease = -(Math.cos(Math.PI * t) - 1) / 2;

    // easeInOutQuad
    const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    window.scrollTo(0, startY + distance * ease);

    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function initSmoothScroll({ selector = "a[href*='#']", offset = 0, duration = 500 } = {}) {
  const links = document.querySelectorAll(selector);
  links.forEach((link) => {
    const hash = link.hash;
    if (!hash || link.pathname !== location.pathname) return;

    link.addEventListener("click", (e) => {
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();

      // 1) 生の目標 Y を計算
      const rawY = window.pageYOffset + target.getBoundingClientRect().top - offset;

      // 2) ドキュメントの最大スクロール位置を取得
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      const maxScrollY = docHeight - window.innerHeight;

      // 3) クランプして最終的な targetY を決定
      const targetY = Math.min(Math.max(rawY, 0), maxScrollY);

      // 4) カスタムスクロール実行
      smoothScrollTo(targetY, duration);
    });
  });
}

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header.sticky");
    const offset = header ? header.getBoundingClientRect().height : 0;
    initSmoothScroll({ offset, duration: 600 });
  });
}
