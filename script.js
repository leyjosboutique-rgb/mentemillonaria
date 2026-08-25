document.addEventListener("DOMContentLoaded", () => {

  /*
  ==========================================
  CHECKOUT
  ==========================================
  */

  const checkoutUrl =
    window.CHECKOUT_URL ||
    "TU_LINK_DE_CHECKOUT";

  document
    .querySelectorAll(".checkout-link")
    .forEach((link) => {

      link.href = checkoutUrl;

    });


  /*
  ==========================================
  FAQ
  ==========================================
  */

  const faqItems =
    document.querySelectorAll(
      ".faq-list details"
    );

  faqItems.forEach((item) => {

    item.addEventListener(
      "toggle",
      () => {

        if (!item.open) return;

        faqItems.forEach((other) => {

          if (other !== item) {
            other.removeAttribute("open");
          }

        });

      }
    );

  });


  /*
  ==========================================
  SCROLL REVEALS
  ==========================================
  */

  const revealElements =
    document.querySelectorAll(
      ".pain-card, " +
      ".journey-step, " +
      ".module, " +
      ".bonus-card, " +
      ".testimonial, " +
      ".comparison-card"
    );

  revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
      "translateY(22px)";

    element.style.transition =
      "opacity .65s ease, transform .65s ease";

  });


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach((element) => {

    observer.observe(element);

  });


  /*
  ==========================================
  CTA TRACKING
  ==========================================
  */

  document
    .querySelectorAll(".checkout-link")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          /*
          Acá podés conectar Meta Pixel.

          Ejemplo:

          if (typeof fbq === "function") {
            fbq(
              "track",
              "InitiateCheckout"
            );
          }
          */

          console.log(
            "Checkout CTA:",
            button.innerText.trim()
          );

        }
      );

    });

});  
