# ⚠️ TODO 5: Count Objects by Class (Hard)
#
# TASK: Load image, detect all objects, count instances of specific classes (cats, people)
#
# SUCCESS CRITERIA:
# - Import YOLO and OpenCV
# - Load model and class names
# - Load 'advanced1.jpg'
# - Run detection
# - Initialize counters for 'cat' and 'person'
# - Loop through detections and count each class
# - Print counts
# - Draw bounding boxes
# - Display image with counts
# - Works for 'advanced2.jpg' when path changed
#
# HINTS:
# - cat_count = 0, person_count = 0
# - Loop: for box in results[0].boxes:
# - class_name = class_names[int(box.cls[0])]
# - if class_name == 'cat': cat_count += 1
# - print(f"Cats detected: {cat_count}")
# - Draw boxes same as image detection
# - Test with both advanced1.jpg and advanced2.jpg
#
# Your code here:

# Import the necessary packages
from ultralytics import YOLO
import cv2 as cv
# Load trained model and class names
model = YOLO('yolov8n.pt')
class_names = list(model.names.values())

# Load the image from 'advanced1.jpg' and store it as img
img = cv.imread('advanced1.jpg')
if img is None:
    print("Could not read the image. Check the file name and path.")
    raise SystemExit

# Detect objects in the image and store them as results
results = model(img)

# Count and display the number of cats and person in the image
cat_count = 0
person_count = 0

# Loop through the results and draw bounding boxes onto the image
# Within the loop, record the number of cats and people
for box in results[0].boxes:
    x1, y1, x2, y2 = map(int, box.xyxy[0])
    conf = float(box.conf[0])
    cls_id = int(box.cls[0])
    label = f"{class_names[cls_id]} {conf * 100:.0f}%"
    cv.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)
    cv.putText(img, label, (x1, y1 - 10), cv.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)

    # Count instances of specific classes
    class_name = class_names[cls_id]
    if class_name == 'cat':
        cat_count += 1
    elif class_name == 'person':
        person_count += 1

# Print the number of cats in the image
print(f"Cats detected: {cat_count}")
print(f"People detected: {person_count}")
# Save and show the image with bounding boxes and counts
output_path = 'advanced1_detected.jpg'
cv.imwrite(output_path, img)
print(f"Saved annotated image to {output_path}")
cv.imshow('Image Detection', img)
cv.waitKey(0)
cv.destroyAllWindows()

# Switch the image path to 'advanced2.jpg' and run the code again
