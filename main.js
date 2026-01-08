// --------------------------------MODAL LOGIC-------------------------------------
const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseButton = document.querySelector(".close-modal-window-button");
const orderButton = document.querySelector(".hero-section-button");
const openModal = () => modalOverlay.classList.add("is-open");
const closeModal = () => modalOverlay.classList.remove("is-open");

orderButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// --------------------------------FORM SENDING IMITATION LOGIC-------------------------------------
const form = document.querySelector("#order-form");
const message = document.querySelector(".form-message");
const submitButton = document.querySelector(".submit-modal-button");
const privacyCheckbox = document.querySelector("#user-privacy");

const fakeRequest = () =>
  new Promise((resolve) => setTimeout(() => resolve({ status: 200 }), 1500));

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  message.hidden = true;
  message.className = "form-message";
  if (!privacyCheckbox.checked) {
    message.textContent = "You must accept the Privacy Policy before sending.";
    message.hidden = false;
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Відправляємо...";

  try {
    await fakeRequest();

    message.textContent = "Заявку успішно відправлено";
    message.hidden = false;

    form.reset();

    setTimeout(() => {
      closeModal();
      message.hidden = true;
    }, 2000);
  } catch (error) {
    message.textContent = "Щось пішло не так спробуйте пізніше";
    message.hidden = false;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Відправити";
  }
});

// --------------------------------FOOTER FORM SENDING IMITATION LOGIC-------------------------------------
const footerForm = document.querySelector(".subscribe-form");
const buttonText = document.querySelector(".button-text");
const footerButton = document.querySelector(".footer-button");
const emailInput = document.querySelector("#footer-user-email");
footerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    emailInput.focus();
    return;
  }

  footerButton.disabled = true;
  buttonText.textContent = "Sending...";

  setTimeout(() => {
    buttonText.textContent = "Sent ✓";

    setTimeout(() => {
      buttonText.textContent = "Subscribe";
      submitButton.disabled = false;
      footerForm.reset();
    }, 2000);
  }, 1500);
});

// --------------------------------MOBILE MENU LOGIC-------------------------------------
const mobileMenu = document.querySelector(".mobile-menu");
const openMenuButton = document.querySelector(".open-mobile-menu-button");
const closeMenuButton = document.querySelector(".close-mobile-menu-button");
const mobileMenuLinks = document.querySelectorAll(".mobile-nav-list-link");

const openMenu = () => {
  mobileMenu.classList.add("is-open");
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  mobileMenu.classList.remove("is-open");
  document.body.style.overflow = "";
};

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
    closeMenu();
  }
});

// -------------------------------SCROLL BUTTON LOGIC-------------------------------------
const scrollBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
