# Project 05: Face Detector - Part 2 (Video Detection)
# Complete Solution

import cv2 as cv
print("OpenCV imported successfully!")

# Load the Haar Cascade classifier
trained_face_data = cv.CascadeClassifier('haarcascade_frontalface_default.xml')
print("Face detector loaded successfully!")

# Initialize webcam capture
video = cv.VideoCapture(0)
if not video.isOpened():
    print("Error: Could not open webcam!")
    exit()
print("Webcam started... Press 'Q' to quit")

# Video processing loop
while True:
    # Read a frame from the webcam
    success, frame = video.read()
    if not success:
        print("Error: Could not read frame")
        break

    # Convert to grayscale for face detection
    gray_img = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)

    # Detect faces in the frame
    face_coordinates = trained_face_data.detectMultiScale(gray_img)

    # Draw green rectangles around detected faces
    for (x, y, w, h) in face_coordinates:
        cv.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # Display face count on frame
    cv.putText(frame, f'Faces: {len(face_coordinates)}',
               (10, 30), cv.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    # Display the frame
    cv.imshow('Live Face Detector', frame)

    # Check if 'Q' is pressed to quit
    if cv.waitKey(1) & 0xFF == ord('q'):
        break

# Cleanup
video.release()
cv.destroyAllWindows()
print("Face detector closed. Goodbye!")
