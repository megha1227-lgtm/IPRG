// Redirect only if running on github.io (production)
if (window.location.hostname.includes("github.io")) {
  window.location.href = "coming-soon.html";
}

const now = new Date();
const launchDate = new Date("2025-11-01");
if (window.location.hostname.includes("github.io") && now < launchDate) {
  window.location.href = "coming-soon.html";
}
