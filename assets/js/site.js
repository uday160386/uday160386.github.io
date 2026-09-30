/* Uday BKV — small progressive enhancements. Everything works without JS. */
(function () {
  "use strict";
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ── Theme toggle ─────────────────────────────────────────── */
  var toggle = $("[data-theme-toggle]");
  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ── Mobile menu ──────────────────────────────────────────── */
  var menuBtn = $("[data-menu-toggle]");
  var nav = $("#site-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { nav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); menuBtn.focus(); }
    });
  }

  /* ── Header border + reading progress ─────────────────────── */
  var header = $("[data-header]");
  var bar = $("[data-progress]");
  var article = $("[data-article] [data-prose]");
  var ticking = false;
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (bar && article) {
      var r = article.getBoundingClientRect();
      var total = r.height - window.innerHeight * 0.6;
      var p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      bar.style.transform = "scaleX(" + p + ")";
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ── Tag filters (projects + writing lists) ───────────────── */
  var filterBar = $("[data-filters]") || document.createElement("div");
  var scope = $("[data-filter-scope]");
  if (scope) {
    var chips = $$(".chip", filterBar);
    var items = $$("[data-tags]", scope);
    var groups = $$("[data-year-group]", scope);
    var empty = $("[data-empty]", scope);

    var apply = function (tag, push) {
      var shown = 0;
      items.forEach(function (el) {
        var ok = !tag || el.getAttribute("data-tags").indexOf("|" + tag + "|") !== -1;
        el.hidden = !ok;
        if (ok) shown++;
      });
      groups.forEach(function (g) { g.hidden = !$$("[data-tags]:not([hidden])", g).length; });
      chips.forEach(function (c) { c.classList.toggle("is-active", c.getAttribute("data-filter") === tag); });
      if (empty) empty.hidden = shown > 0;
      if (push && window.history && history.replaceState) {
        var url = new URL(window.location.href);
        if (tag) url.searchParams.set("tag", tag); else url.searchParams.delete("tag");
        history.replaceState(null, "", url);
      }
    };
    chips.forEach(function (c) {
      c.addEventListener("click", function () { apply(c.getAttribute("data-filter"), true); });
    });
    var initial = new URLSearchParams(window.location.search).get("tag");
    if (initial) apply(initial, false);
  }

  /* ── Article enhancements ─────────────────────────────────── */
  var prose = $("[data-prose]");
  if (prose) {
    // wrap tables so wide ones scroll instead of breaking the layout
    $$("table", prose).forEach(function (t) {
      if (t.parentNode.classList.contains("table-wrap")) return;
      var w = document.createElement("div");
      w.className = "table-wrap";
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
    });

    // external links open in a new tab
    $$("a[href^='http']", prose).forEach(function (a) {
      if (a.hostname !== window.location.hostname) { a.target = "_blank"; a.rel = "noopener"; }
    });

    // code blocks: language label + copy button
    $$("div.highlighter-rouge", prose).forEach(function (block) {
      var m = block.className.match(/language-([\w+-]+)/);
      if (m && m[1] !== "plaintext") {
        var lang = document.createElement("span");
        lang.className = "code-lang";
        lang.textContent = m[1];
        block.appendChild(lang);
      }
      if (!navigator.clipboard) return;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "copy-btn";
      btn.textContent = "Copy";
      btn.addEventListener("click", function () {
        var code = $("code", block);
        navigator.clipboard.writeText(code ? code.innerText : block.innerText).then(function () {
          btn.textContent = "Copied";
          setTimeout(function () { btn.textContent = "Copy"; }, 1600);
        });
      });
      block.appendChild(btn);
    });

    // table of contents
    var toc = $("[data-toc]");
    var list = $("[data-toc-list]");
    var heads = $$("h2[id], h3[id]", prose);
    var grid = prose.parentNode;
    if (toc && list && heads.length >= 3) {
      heads.forEach(function (h) {
        var li = document.createElement("li");
        li.className = "toc-" + h.tagName.toLowerCase();
        var a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.textContent.replace(/^[\s\-–—#]+/, "");
        li.appendChild(a);
        list.appendChild(li);
      });
      toc.hidden = false;
      if ("IntersectionObserver" in window) {
        var links = $$("a", list);
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              links.forEach(function (l) { l.classList.toggle("is-active", l.getAttribute("href") === "#" + e.target.id); });
            }
          });
        }, { rootMargin: "-90px 0px -70% 0px" });
        heads.forEach(function (h) { io.observe(h); });
      }
    } else if (grid) {
      grid.classList.add("no-toc");
    }
  }

  /* ── Footer clock (Singapore) ─────────────────────────────── */
  var clock = $("[data-clock]");
  if (clock && window.Intl) {
    var fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Singapore" });
    var tick = function () { clock.textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 30000);
  }

  /* ── Gentle reveal on scroll (home + listings) ────────────── */
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var targets = $$(".section, .card, .note-card, .ledger");
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); ro.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (t) {
      if (t.getBoundingClientRect().top > window.innerHeight) { t.classList.add("reveal"); ro.observe(t); }
    });
  }
})();
