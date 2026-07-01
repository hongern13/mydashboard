# ⚠️ TODO 4: Real-Time Webcam Detection (Medium)
#
# TASK: Access webcam, perform live object detection, display results in real-time
#
# SUCCESS CRITERIA:
# - Import YOLO and OpenCV
# - Load model and class names
# - Access webcam using cv.VideoCapture(0)
# - Read frames from webcam in loop
# - Detect objects in real-time
# - Draw bounding boxes
# - Display live feed with detections
# - Exit when 'Q' pressed
# - Release webcam
#
# HINTS:
# - video = cv.VideoCapture(0)  # 0 = default camera
# - Check camera opened: if not video.isOpened(): print("Error")
# - Same frame loop as video processing
# - cv.putText with font size 0.7
# - Must run locally (not in Colab - no webcam access)
# - Press 'Q' to stop
#
# Your code here:

# Import YOLO from ultralytics
from ultralytics import YOLO
# Import OpenCV
import cv2 as cv

# Load trained model 'yolov8n.pt' and store it as model
model = YOLO('yolov8n.pt')
# Load the model's labels and store them as class_names
class_names = list(model.names.values())
# Load video from webcam and store it as video
video = cv.VideoCapture(0)

# Loop through the video frame by frame
while True:
    # Capture frame-by-frame
    ret, frame = video.read()
    # Quit when no more frame
    if not ret:
        break
    # Run object detector
    results = model(frame)

    # Draw bounding boxes
    for result in results:
        for box in result.boxes:
            x1, y1, x2, y2 = map(int, box.xyxy[0])
            conf = float(box.conf[0])
            cls_id = int(box.cls[0])
            label = f"{class_names[cls_id]} {conf * 100:.0f}%"
            cv.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
    # Under cv.putText, adjust the font size to 0.7
            cv.putText(frame, label, (x1, y1 - 10), cv.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)

    # Display the resulting frame
    cv.imshow('Webcam Detection', frame)
    # stop when Q is pressed
    if cv.waitKey(1) & 0xFF == ord('q'):
        break
# When everything done, release the capture
video.release()
cv.destroyAllWindows()