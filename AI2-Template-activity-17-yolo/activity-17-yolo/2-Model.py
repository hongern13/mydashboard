# ⚠️ TODO 1: Load YOLO Model and Extract Class Names (Easy)
#
# TASK: Load the pre-trained YOLOv8 nano model and extract the 80 COCO class names
#
# SUCCESS CRITERIA:
# - Import YOLO from ultralytics
# - Load model from 'yolov8n.pt'
# - Extract class names as a list
# - Print all 80 class names
# - Save class names to 'class_names.txt' file
#
# HINTS:
# - from ultralytics import YOLO
# - model = YOLO('yolov8n.pt')
# - class_names = list(model.names.values())
# - print(class_names)
# - Use with open('file.txt', 'w') to write file
# - Write each name on new line: f.write(name + '\n')
#
# Your code here:

# Import YOLO from ultralytics
from ultralytics import YOLO

# Load trained model 'yolov8n.pt' and store it as model
model = YOLO('yolov8n.pt')
# Load the model's labels and store them as class_names
class_names = list(model.names.values())

# Print out class_names
print(class_names)

# Save class_names to a text file
with open ('file.txt', 'w') as f:
    for name in class_names:
        f.write(name + '\n')

# You can then view all the available classes that YOLOv8 can detect by opening the text file.
