# Project 05: Face Detector - Part 1 (Image Detection)
# Student Template - Complete the TODOs!

# ============================================
# Phase 1: Import OpenCV
# ============================================
# WORKING EXAMPLE: Import the computer vision library
import cv2 as cv
print("OpenCV imported successfully!")

# ============================================
# Phase 2: Load Trained Data
# ============================================
# TODO 1: Load the Haar Cascade classifier (Easy)
#
# Load the trained face detection model from the XML file.
# The classifier contains patterns learned from thousands of face images.
#
# STEPS:
# 1. Use cv.CascadeClassifier() to load the model
# 2. Pass the filename 'haarcascade_frontalface_default.xml'
# 3. Store in variable 'trained_face_data'
#
# EXPECTED: No errors, model loads successfully
#
# YOUR CODE HERE - starter code provided:
trained_face_data = cv.CascadeClassifier('haarcascade_frontalface_default.xml')
# TODO: Add a print statement to confirm loading succeeded (e.g., "Face detector loaded!")

# ============================================
# Phase 3: Image Processing
# ============================================
# TODO 2: Process the image (Medium)
#
# Read, resize, and convert the image to grayscale.
# Grayscale helps the detector focus on shapes, not colors.
#
# STEPS:
# 1. Read image: img = cv.imread('sample.jpg')
# 2. Resize with scale 0.5 (or adjust as needed):
#    - width = int(img.shape[1] * scale)
#    - height = int(img.shape[0] * scale)
#    - img = cv.resize(img, (width, height))
# 3. Convert to grayscale: gray_img = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
#
# EXPECTED: Image loaded and processed without errors
#
# YOUR CODE HERE - starter code provided:
img = cv.imread('sample.jpg')
scale = 0.5
width = int(img.shape[1] * scale)
height = int(img.shape[0] * scale)
dim = (width, height)
img_small = cv.resize(img, dim, interpolation=cv.INTER_AREA)
print(f"Image loaded: {img_small.shape}")
gray_img = cv.cvtColor(img_small, cv.COLOR_BGR2GRAY)
# TODO: Resize the image (use scale = 0.5 to make it smaller)
# HINT: width = int(img.shape[1] * scale), height = int(img.shape[0] * scale)
# HINT: img = cv.resize(img, (width, height))

# TODO: Convert to grayscale and store in 'gray_img'
# HINT: gray_img = cv.cvtColor(img, cv.COLOR_BGR2GRAY)

# ============================================
# Phase 4: Face Detection
# ============================================
# TODO 3: Detect faces and draw rectangles (Medium)
#
# Use the trained classifier to detect faces, then draw boxes around them.
#
# STEPS:
# 1. Detect faces: face_coordinates = trained_face_data.detectMultiScale(gray_img)
# 2. Print number of faces found
# 3. Loop through each face and draw green rectangle:
#    for (x, y, w, h) in face_coordinates:
#        cv.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
#
# COLOR: (0, 255, 0) = Green in BGR format
# THICKNESS: 2 pixels
#
# EXPECTED: Green rectangles drawn around each detected face
#
# YOUR CODE HERE - starter code provided:
if 'gray_img' not in globals() and 'gray_img' not in locals():
    gray_img = cv.cvtColor(img_small, cv.COLOR_BGR2GRAY)

face_coordinates = trained_face_data.detectMultiScale(gray_img)
print(f"Found {len(face_coordinates)} face(s) in the image")

# TODO: Loop through face_coordinates and draw rectangles
# Each face gives (x, y, w, h) - the position and size of the face
# Use: cv.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
for (x, y, w, h) in face_coordinates:
    cv.rectangle(img_small, (x, y), (x + w, y + h), (0, 255, 0), 2)

# ============================================
# Phase 5: Display Results
# ============================================
# WORKING EXAMPLE: Show the image with face detection boxes
cv.imshow('Face Detector - Image', img_small)
print("Press any key to close...")
cv.waitKey(0)
cv.destroyAllWindows()

print("\n--- Face detection complete! ---")
