function setActiveTab(tabName) {
  const buttons = Array.from(document.querySelectorAll(".tab-btn"));
  const panels = Array.from(document.querySelectorAll(".form-panel"));

  buttons.forEach((btn) => {
    const isActive = btn.dataset.tab === tabName;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
    btn.tabIndex = isActive ? 0 : -1;
  });

  panels.forEach((panel) => {
    const isActive =
      (tabName === "credentials" && panel.id === "credentials-panel") ||
      (tabName === "nafath" && panel.id === "nafath-panel");
    panel.classList.toggle("active", isActive);
  });
}

function isTenDigits(value) {
  return /^\d{10}$/.test(value);
}

const I18N = {
  ar: {
    "header.logo": "https://mep.gov.sa/assets/imgs/logo-rtl.svg",
    "header.title": "المنصة الوطنية الموحدة",
    "header.subtitle": "المملكة العربية السعودية",
    "header.langToggle": "English",
  
    "login.title": "تسجيل الدخول",
    "login.subtitle": "اختر طريقة تسجيل الدخول المناسبة لك",

    "tabs.credentials": "اسم المستخدم والكلمة",
    "tabs.nafath": "النفاذ الوطني الموحد",

    "fields.username.label": "اسم المستخدم / الهوية الوطنية",
    "fields.username.placeholder": "أدخل اسم المستخدم أو رقم الهوية",
    "fields.password.label": "كلمة المرور",
    "fields.password.placeholder": "أدخل كلمة المرور",
    "fields.remember": "تذكرني",
    "actions.forgotPassword": "نسيت كلمة المرور؟",
    "actions.login": "تسجيل الدخول",

    "nafath.desc":
      "سيتم توجيهك إلى تطبيق نفاذ الوطني للتحقق من الهوية بشكل آمن وسريع عبر الهوية الوطنية أو الإقامة.",
    "fields.nafathId.label": "رقم الهوية الوطنية / الإقامة",
    "fields.nafathId.placeholder": "1XXXXXXXXX",
    "actions.nafathLogin": "الدخول عبر نفاذ",

    "footer.copyright": "جميع الحقوق محفوظة للمنصة الوطنية الموحدة © 2026",

    "errors.requiredUsername": "الرجاء إدخال اسم المستخدم أو رقم الهوية.",
    "errors.requiredPassword": "الرجاء إدخال كلمة المرور.",
    "errors.invalidCredentials": "تعذّر تسجيل الدخول. تأكد من البيانات ثم أعد المحاولة.",
    "errors.nafathIdInvalid": "الرجاء إدخال رقم هوية/إقامة صحيح مكون من 10 أرقام.",
    "messages.signingIn": "جاري تسجيل الدخول...",
    "messages.nafathRedirect": "جاري المتابعة عبر نفاذ...",
  },
  en: {
    "header.logo": "https://mep.gov.sa/assets/imgs/logo.svg",
    "header.title": "Unified National Platform",
    "header.subtitle": "Kingdom of Saudi Arabia",
    "header.langToggle": "العربية",

    "login.title": "Sign in",
    "login.subtitle": "Choose your preferred sign-in method",

    "tabs.credentials": "Username & Password",
    "tabs.nafath": "National Single Sign-On (Nafath)",

    "fields.username.label": "Username / National ID",
    "fields.username.placeholder": "Enter username or national ID",
    "fields.password.label": "Password",
    "fields.password.placeholder": "Enter password",
    "fields.remember": "Remember me",
    "actions.forgotPassword": "Forgot password?",
    "actions.login": "Sign in",

    "nafath.desc":
      "You will be redirected to the Nafath app for secure identity verification using your National ID or Iqama.",
    "fields.nafathId.label": "National ID / Iqama number",
    "fields.nafathId.placeholder": "1XXXXXXXXX",
    "actions.nafathLogin": "Continue with Nafath",

    "footer.copyright": "All rights reserved © 2026",

    "errors.requiredUsername": "Please enter your username or national ID.",
    "errors.requiredPassword": "Please enter your password.",
    "errors.invalidCredentials": "Sign-in failed. Please check your details and try again.",
    "errors.nafathIdInvalid": "Please enter a valid 10-digit ID/Iqama number.",
    "messages.signingIn": "Signing in...",
    "messages.nafathRedirect": "Continuing with Nafath...",
  },
};

function getLang() {
  return document.documentElement.lang === "en" ? "en" : "ar";
}

function t(key) {
  const lang = getLang();
  return I18N[lang]?.[key] ?? I18N.ar[key] ?? key;
}

function applyLocalization() {
  const lang = getLang();
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  document.querySelectorAll("[data-i18n-src]").forEach((el) => {
    el.setAttribute("src", t(el.getAttribute("data-i18n-src")));
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });
}

function setPageMessage(message, type = "error") {
  const el = document.getElementById("pageMessage");
  if (!el) return;
  if (!message) {
    el.textContent = "";
    el.hidden = true;
    el.dataset.type = "";
    return;
  }
  el.textContent = message;
  el.hidden = false;
  el.dataset.type = type;
}

function setFieldError(inputEl, errorEl, message) {
  if (!inputEl || !errorEl) return;
  const hasError = Boolean(message);
  inputEl.classList.toggle("is-invalid", hasError);
  inputEl.setAttribute("aria-invalid", hasError ? "true" : "false");
  errorEl.textContent = message || "";
}

function clearAllErrors() {
  setPageMessage("");
  setFieldError(
    document.getElementById("username"),
    document.getElementById("usernameError"),
    ""
  );
  setFieldError(
    document.getElementById("password"),
    document.getElementById("passwordError"),
    ""
  );
  setFieldError(
    document.getElementById("nafath-id"),
    document.getElementById("nafathIdError"),
    ""
  );
}

function slideToggle(element, durationMs = 160) {
  if (!element) return;

  const isHidden =
    element.hidden === true ||
    window.getComputedStyle(element).display === "none" ||
    element.getAttribute("aria-hidden") === "true";

  element.style.overflow = "hidden";
  element.style.willChange = "height";

  const startHeight = isHidden ? 0 : element.getBoundingClientRect().height;
  element.hidden = false;
  element.setAttribute("aria-hidden", "false");
  element.style.display = "block";

  // Measure end height after forcing layout.
  element.style.height = "auto";
  const endHeight = element.getBoundingClientRect().height;

  element.style.height = `${startHeight}px`;
  // Force reflow to apply the start height.
  element.getBoundingClientRect();

  const keyframes = [{ height: `${startHeight}px` }, { height: `${isHidden ? endHeight : 0}px` }];
  const anim = element.animate(keyframes, { duration: durationMs, easing: "ease-out" });

  anim.onfinish = () => {
    const shouldHide = !isHidden;
    element.style.overflow = "";
    element.style.willChange = "";
    element.style.height = "";
    if (shouldHide) {
      element.style.display = "none";
      element.hidden = true;
      element.setAttribute("aria-hidden", "true");
    }
  };

  anim.oncancel = () => {
    element.style.overflow = "";
    element.style.willChange = "";
    element.style.height = "";
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".tabs-container");
  const loginForm = document.getElementById("loginForm");
  const nafathSubmitBtn = document.getElementById("nafathSubmitBtn");
  const langToggleBtn = document.getElementById("langToggleBtn");

  applyLocalization();

  if (tabs) {
    tabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab-btn");
      if (!btn) return;
      clearAllErrors();
      setActiveTab(btn.dataset.tab);
    });

    tabs.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

      const buttons = Array.from(tabs.querySelectorAll(".tab-btn"));
      const currentIndex = buttons.findIndex((b) => b.classList.contains("active"));
      if (currentIndex === -1) return;

      const dir = e.key === "ArrowLeft" ? 1 : -1; // RTL: left moves forward visually
      const nextIndex = (currentIndex + dir + buttons.length) % buttons.length;
      const next = buttons[nextIndex];
      clearAllErrors();
      setActiveTab(next.dataset.tab);
      next.focus();
      e.preventDefault();
    });
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      clearAllErrors();
      const nextLang = getLang() === "ar" ? "en" : "ar";
      document.documentElement.lang = nextLang;
      applyLocalization();
    });
  }
  // placeholder for real auth integration
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      clearAllErrors();

      const usernameEl = document.getElementById("username");
      const passwordEl = document.getElementById("password");

      const username = usernameEl?.value?.trim() ?? "";
      const password = passwordEl?.value ?? "";

      let hasError = false;
      if (!username) {
        hasError = true;
        setFieldError(usernameEl, document.getElementById("usernameError"), t("errors.requiredUsername"));
      }
      if (!password) {
        hasError = true;
        setFieldError(passwordEl, document.getElementById("passwordError"), t("errors.requiredPassword"));
      }

      if (hasError) {
        setPageMessage(t("errors.invalidCredentials"));
        (usernameEl || passwordEl)?.focus?.();
        return;
      }

      setPageMessage(t("messages.signingIn"), "info"); // placeholder for real auth integration
    });
  }
  // placeholder for real Nafath redirect/integration
  if (nafathSubmitBtn) {
    nafathSubmitBtn.addEventListener("click", () => {
      clearAllErrors();
      const nafathEl = document.getElementById("nafath-id");
      const nafathId = nafathEl?.value?.trim() ?? "";

      if (!isTenDigits(nafathId)) {
        setFieldError(nafathEl, document.getElementById("nafathIdError"), t("errors.nafathIdInvalid"));
        setPageMessage(t("errors.nafathIdInvalid"));
        nafathEl?.focus?.();
        return;
      }

      setPageMessage(t("messages.nafathRedirect"), "info"); // placeholder for real Nafath redirect/integration
    });
  }

  // Digital stamp toggle (jQuery-free equivalent of slideToggle behavior)
  document.querySelectorAll(".btn-digital-stamp-card").forEach((btn) => {
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", () => {
      const header = btn.parentElement;
      if (!header) return;
      const body = header.nextElementSibling;
      header.classList.toggle("open");
      btn.setAttribute("aria-expanded", header.classList.contains("open") ? "true" : "false");
      slideToggle(body, 160);
    });
  });
});

