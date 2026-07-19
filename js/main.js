/* ===== 芯片专家老李Ai · 共享脚本 ===== */

// 导航汉堡菜单
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
    document.querySelectorAll('.nav-links a').forEach(function(a) {
      a.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });
  }

  // 淡入动画 - 只观察 .fade-in 元素
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(function(el) { observer.observe(el); });
  }

  // 导航高亮
  var sections = document.querySelectorAll('.scroll-pad, .hero');
  var navAnchors = document.querySelectorAll('.nav-links a');
  if (sections.length && navAnchors.length) {
    var navObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id || 'home';
          navAnchors.forEach(function(a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    sections.forEach(function(s) { navObserver.observe(s); });
  }

  // 复制微信小程序口令
  document.querySelectorAll('[data-copy]').forEach(function(button) {
    button.addEventListener('click', function() {
      var value = button.getAttribute('data-copy');
      if (!value || !navigator.clipboard) return;
      navigator.clipboard.writeText(value).then(function() {
        var original = button.textContent;
        button.textContent = '已复制，请到微信粘贴';
        window.setTimeout(function() { button.textContent = original; }, 1800);
      });
    });
  });
});
