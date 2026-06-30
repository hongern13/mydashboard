# Project 05: Face Detector - Part 1 (Image Detection)
# Complete Solution

import cv2 as cv
print("OpenCV imported successfully!")

# Load the Haar Cascade classifier
trained_face_data = cv.CascadeClassifier('haarcascade_frontalface_default.xml')
print("Face detector loaded successfully!")

# Read the image
img = cv.imread('sample.jpg')
if img is None:
    print("Error: Could not load image. Make sure 'sample.jpg' exists.")
    exit()
print(f"Image loaded: {img.shape}")

# Resize the image
scale = 0.5
width = int(img.shape[1] * scale)
height = int(img.shape[0] * scale)
img = cv.resize(img, (width, height))
print(f"Image resized to: {width}x{height}")

# Convert to grayscale
gray_img = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
print("Image converted to grayscale")

# Detect faces
face_coordinates = trained_face_data.detectMultiScale(gray_img)
print(f"Found {len(face_coordinates)} face(s) in the image")

# Draw rectangles around faces
for (x, y, w, h) in face_coordinates:
    # (0, 255, 0) = Green color in BGR format
    # 2 = thickness of rectangle
    cv.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)

# Display the result
cv.imshow('Face Detector - Image', img)
print("Press any key to close...")
cv.waitKey(0)
cv.destroyAllWindows()
print("Face detector closed. Goodbye!")
