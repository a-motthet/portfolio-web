document.getElementById("download-btn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "/cv/Atsadawut_resume.pdf";
  link.download = "Atsadawut_cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
