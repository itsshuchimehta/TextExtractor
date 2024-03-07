document
  .getElementById("upload-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    uploadFile();
  });

document.getElementById("file-upload").addEventListener("change", function () {
  var fileInput = document.getElementById("file-upload");
  var extractButton = document.getElementById("extract-button");
  var fileNameDisplay = document.getElementById("file-name-display");

  if (fileInput.files.length > 0) {
    extractButton.disabled = false;
    var fileName = fileInput.files[0].name;
    fileNameDisplay.textContent = fileName;
  } else {
    extractButton.disabled = true;
    fileNameDisplay.textContent = "";
  }
});

function uploadFile() {
  var progressBar = document.getElementById("progress-bar-inner");
  progressBar.style.width = "0%";

  var fileInput = document.getElementById("file-upload");
  var file = fileInput.files[0];
  var formData = new FormData();
  formData.append("file", file);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/upload", true);

  xhr.upload.onprogress = function (e) {
    if (e.lengthComputable) {
      var percentComplete = (e.loaded / e.total) * 100;
      progressBar.style.width = percentComplete + "%";
    }
  };

  xhr.onload = function () {
    if (xhr.status === 200) {
      var resultContainer = document.getElementById("result-container");
      var extractedText = xhr.responseText;
      var extractedTextElement = document.getElementById("extracted-text");
      extractedTextElement.textContent = extractedText;
      resultContainer.style.display = "block";
    } else {
      console.error("Upload failed");
    }
  };

  xhr.send(formData);
}

function goBack() {
  var resultContainer = document.getElementById("result-container");
  var progressBarInner = document.querySelector(".progress-bar-inner");
  var extractButton = document.getElementById("extract-button");
  var fileNameDisplay = document.getElementById("file-name-display");
  resultContainer.style.display = "none";
  progressBarInner.style.width = "0%";
  extractButton.disabled = true;
  fileNameDisplay.textContent = "";
}

function copyToClipboard() {
  var textToCopy = document.getElementById("extracted-text").textContent;
  var textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  var copyBtn = document.getElementById("copyButton");
  copyBtn.textContent = "Copied!";

  setTimeout(function () {
    copyBtn.textContent = "Copy Text to Clipboard";
  }, 2000);
}
