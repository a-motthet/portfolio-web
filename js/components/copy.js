// Select all images inside the contact-icon div
const icons = document.querySelectorAll(".contact-icon img");

icons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const textToCopy = icon.getAttribute("data-copy");
    const newPageUrl = icon.getAttribute("data-url"); // URL for the new page

    // Use Clipboard API to copy text to the clipboard
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Copied to clipboard: " + textToCopy); // Alert user after successful copy
        window.open(newPageUrl, "_blank"); // Open the URL in a new tab
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  });
});
