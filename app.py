from flask import Flask, render_template, request
import cv2
import pytesseract
import os

app = Flask(__name__)


UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Function to preprocess the image using OpenCV
def preprocess_image(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, thresholded = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return thresholded

# Function to perform OCR using Tesseract
def perform_ocr(image):
    preprocessed_image = preprocess_image(image)
    extracted_text = pytesseract.image_to_string(preprocessed_image)
    return extracted_text


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
   
    if 'file' not in request.files:
        return 'No file uploaded'

    file = request.files['file']

   
    if file.filename == '':
        return 'No file selected'

    
    if file:
        # Save the uploaded file
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(file_path)

        # Read the uploaded image
        image = cv2.imread(file_path)

        # Perform OCR
        extracted_text = perform_ocr(image)

        # Return the extracted text
        return extracted_text

if __name__ == '__main__':
    app.run(debug=True)
    