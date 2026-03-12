window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

if (!window.__crisiumGtagLoaded) {
  window.__crisiumGtagLoaded = true;

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-XHH0DSS4T3";
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", "G-XHH0DSS4T3");
}
