# ⚠️ TODO 3: Process Video Frame-by-Frame (Medium)
#
# TASK: Load video file, process each frame with YOLO detection, display with bounding boxes
#
# SUCCESS CRITERIA:
# - Import YOLO and OpenCV
# - Load model and class names
# - Load 'video.mp4' using cv.VideoCapture
# - Loop through frames
# - Detect objects in each frame
# - Draw bounding boxes on frames
# - Display video stream
# - Exit when 'Q' pressed
# - Release video capture
#
# HINTS:
# - video = cv.VideoCapture('video.mp4')
# - while True: ret, frame = video.read()
# - if not ret: break
# - results = model(frame)
# - Draw boxes same as image detection
# - cv.putText with font size 0.7 (bigger for video)
# - cv.imshow('Video Detection', frame)
# - if cv.waitKey(1) & 0xFF == ord('q'): break
# - video.release() and cv.destroyAllWindows()
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

# Load video from 'video.mp4' and store it as video
video = cv.VideoCapture('video.mp4')

# Prepare video writer (will be initialized after reading first frame)
writer = None

# Loop through the video frame by frame
while True:
    # Capture frame-by-frame
    ret, frame = video.read()
    # Quit when no more frame
    if not ret:
        break

    # Initialize writer once we know frame size and fps
    if writer is None:
        fps = video.get(cv.CAP_PROP_FPS) or 20.0
        width = int(video.get(cv.CAP_PROP_FRAME_WIDTH) or frame.shape[1])
        height = int(video.get(cv.CAP_PROP_FRAME_HEIGHT) or frame.shape[0])
        fourcc = cv.VideoWriter_fourcc(*'mp4v')
        writer = cv.VideoWriter('video_detected.mp4', fourcc, max(1.0, fps), (width, height))

    # Run object detector
    results = model(frame)

    # Draw bounding boxes
    for result in results:
        for box in result.boxes:
            x1, y1, x2, y2 = map(int, box.xyxy[0])
            cls = int(box.cls[0])
            conf = float(box.conf[0])
            label = f"{class_names[cls]} {conf * 100:.0f}%"
            cv.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
            cv.putText(frame, label, (x1, y1 - 10), cv.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)

    # Write annotated frame to output file
    if writer is not None:
        writer.write(frame)

    # Try to display the resulting frame (may not work in headless environments)
    try:
        cv.imshow('Video Detection', frame)
        if cv.waitKey(1) & 0xFF == ord('q'):
            break
    except Exception:
        # If display isn't available, continue processing and only save to file
        pass

# When everything done, release the capture and writer
video.release()
if writer is not None:
    writer.release()
cv.destroyAllWindows()