# ⚠️ TODO 2: Detect Objects in Image (Medium)
#
# TASK: Load image, run YOLO detection, and draw bounding boxes with labels
#
# SUCCESS CRITERIA:
# - Import YOLO and OpenCV
# - Load YOLOv8n model and class names
# - Load 'outing.jpg' image
# - Run object detection
# - Draw bounding boxes (green rectangles)
# - Add labels with class name and confidence
# - Display image with detections
#
# HINTS:
# - from ultralytics import YOLO
# - import cv2 as cv
# - model = YOLO('yolov8n.pt')
# - img = cv.imread('outing.jpg')
# - results = model(img)
# - Loop through results[0].boxes
# - box.xyxy[0] gives [x1, y1, x2, y2]
# - box.cls[0] gives class ID
# - box.conf[0] gives confidence score
# - cv.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)
# - cv.putText with font size 0.5
# - cv.imshow() then cv.waitKey(0)
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

# Load image from 'outing.jpg' and store it as img
img = cv.imread('outing.jpg')

# Detect objects in img and store them as results
results = model(img)

# Draw the bounding boxes and labels on the image
for result in results:
    for box in result.boxes:
        x1, y1, x2, y2 = map(int, box.xyxy[0])
        cls = int(box.cls[0])
        conf = float(box.conf[0])
        label = f"{class_names[cls]} {conf * 100:.0f}%"
        cv.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv.putText(img, label, (x1, y1 - 10), cv.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)


# Save the annotated image
cv.imwrite('outing_detected.jpg', img)
print("✓ Image saved as 'outing_detected.jpg'")

# Show the image (optional - may not display in all environments)
try:
    cv.imshow('YOLO output', img)
    cv.waitKey(0)
    cv.destroyAllWindows()
except:
    pass
