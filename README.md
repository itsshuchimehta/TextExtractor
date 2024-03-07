# TextExtractor: Image-to-Text Conversion Tool 📝🔍

## Description
TextExtractor is a web-based tool designed to effortlessly convert images into editable and copyable text. Utilizing advanced OCR (Optical Character Recognition) technology, it transforms every word in your photos into accessible, manageable text. Whether tackling handwritten notes or printed documents, TextExtractor streamlines the digitization of text content. 🌟

## Technologies Used 🛠️
- **Flask**: A lightweight WSGI web application framework in Python, crafting the web server.
- **Python**: The core programming language driving our project.
- **TensorFlow & Tesseract OCR**: Combined, these offer a robust solution for OCR tasks, providing powerful text recognition capabilities.
- **HTML/CSS/JS**: The trifecta used for crafting the user interface and enabling client-side interactions.

## Getting Started 🚀

### Prerequisites
Ensure you have Python installed on your system along with pip for managing Python packages.

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/itsshuchimehta/TextExtractor.git
   cd TextExtractor

2. **Set up a virtual environment (optional, but recommended)**

* For Unix/macOS:
```sh
python3 -m venv venv
source venv/bin/activate

* For Windows:
```sh
python -m venv venv
.\venv\Scripts\activate

3. ** Install dependencies**
```sh
pip install -r requirements.txt

The requirements.txt file lists all necessary packages for running TextExtractor, ensuring compatibility and smooth operation. This file includes Flask, TensorFlow, Tesseract-OCR, and others essential for the project.

### Running the Application
To launch the Flask server and start using TextExtractor:
```sh
flask run

Then, navigate to http://127.0.0.1:5000/ in your web browser to access the tool.

**Contribution ** 🤝
Contributions are warmly welcomed! Feel free to fork the repository, implement your changes, and submit a pull request.
