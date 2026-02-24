const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(" .span", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

ScrollReveal().reveal(".def", {
  ...scrollRevealOption,
  interval: 1800,
  duration: 2500,
  origin: "left",
});

ScrollReveal().reveal(".hero-text ", {
  interval: 1200,
  duration: 3000,
  origin: "up",
});

ScrollReveal().reveal("a.btn-outline ", {
  interval: 1200,
  duration: 3000,
  origin: "left",
});

ScrollReveal().reveal(".section-subtitle ", {
  interval: 800,
  duration: 1000,
  origin: "right",
});

ScrollReveal().reveal(".section-title ", {
  interval: 1800,
  duration: 1200,
  origin: "bottom",
});

ScrollReveal().reveal(".section-text ", {
  interval: 1800,
  duration: 1200,
  origin: "bottom",
});

ScrollReveal().reveal(".img-cover ", {
  interval: 1200,
  origin: "up",
});

ScrollReveal().reveal(".about-text ", {
  interval: 800,
  duration: 500,
  origin: "bottom",
});

ScrollReveal().reveal(".service-card ", {
  interval: 1200,
  duration: 3000,
  origin: "up",
});

ScrollReveal().reveal(".service-card ", {
  interval: 1200,
  duration: 3000,
  origin: "up",
});

ScrollReveal().reveal(".grid-list li", {
  interval: 1200,
  duration: 3000,
  origin: "up",
});
