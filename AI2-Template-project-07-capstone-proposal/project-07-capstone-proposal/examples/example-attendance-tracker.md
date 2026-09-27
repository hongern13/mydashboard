# Example Proposal: Smart Attendance Tracker

This is a complete example proposal to help you understand the expected quality and depth for each section.

---

## Front Page

**Program:** AI2: Artificial Intelligence Foundations

**Project Title:** Smart Attendance Tracker

**Team Members:**
- Ahmad bin Abdullah (Group 3)
- Sarah Lee Wei Ling
- Muhammad Hafiz

**Class:** AI-2A

---

## Problem Statement (½ Page)

### Background

Traditional attendance tracking in schools and workplaces relies on manual methods such as paper roll calls, sign-in sheets, or basic card-swiping systems. According to a 2023 survey by the Ministry of Education Malaysia, teachers spend an average of 10-15 minutes per class session on attendance taking, accounting for approximately 8% of total teaching time.

### Effects

This manual process creates several problems:

1. **Time Wastage:** With 6-7 periods per day, a teacher may spend up to 90 minutes daily just taking attendance.

2. **Inaccuracy:** Manual records are prone to human error, proxy attendance (friends signing for absent students), and lost paperwork.

3. **Administrative Burden:** Schools must maintain physical records, making data analysis and attendance pattern detection difficult.

4. **Delayed Intervention:** By the time attendance issues are identified, students may have already missed significant learning time.

According to a study by Universiti Malaya (2022), schools using manual attendance tracking had a 12% higher rate of undetected truancy compared to automated systems.

---

## Solution (½ Page)

### Smart Attendance Tracker

**Smart Attendance Tracker** is an AI-powered facial recognition system designed to automate attendance recording in classrooms. The system uses computer vision to detect and recognize student faces in real-time, automatically recording attendance without any manual intervention.

### Target Users

- **Teachers:** Primary users who benefit from automated attendance
- **School Administrators:** Access attendance analytics and reports
- **Parents:** Receive notifications about their child's attendance
- **Students:** View their own attendance history

### Logo

[Insert project logo here]

---

## Objectives (½ Page)

### Objective 1: Reduce Attendance Time
Reduce the time required to record class attendance from 10 minutes to under 30 seconds using real-time facial recognition.

**Measurement:** Time comparison study before and after implementation

### Objective 2: Improve Accuracy
Achieve 95% or higher accuracy in facial recognition and attendance recording, eliminating proxy attendance.

**Measurement:** Accuracy testing with 100+ students over 1 month

### Objective 3: Enable Data-Driven Insights
Provide teachers and administrators with automated weekly attendance reports highlighting patterns and potential concerns.

**Measurement:** Survey teacher satisfaction with report usefulness

---

## System Modules (1 Page)

### Module 1: Face Detection

| Aspect | Details |
|--------|---------|
| **Description** | This module detects human faces in the webcam video feed, identifying the location and boundaries of each face. |
| **Features** | 1. Detect multiple faces simultaneously in a single frame |
|  | 2. Calculate bounding box coordinates for each detected face |
|  | 3. Filter out false positives (non-face objects) |
|  | 4. Handle various lighting conditions |

### Module 2: Face Recognition

| Aspect | Details |
|--------|---------|
| **Description** | This module identifies who each detected face belongs to by comparing against a database of registered student faces. |
| **Features** | 1. Extract facial embeddings from detected faces |
|  | 2. Compare embeddings with registered student database |
|  | 3. Return student ID and confidence score |
|  | 4. Handle new face registration for new students |

### Module 3: Attendance Manager

| Aspect | Details |
|--------|---------|
| **Description** | This module handles the business logic of recording attendance, managing timestamps, and preventing duplicate entries. |
| **Features** | 1. Record attendance with timestamp when face is recognized |
|  | 2. Prevent duplicate attendance entries |
|  | 3. Mark students as "Late" if arriving after class start time |
|  | 4. Store attendance data in database |

### Module 4: Dashboard & Reports

| Aspect | Details |
|--------|---------|
| **Description** | This module provides a user interface for viewing attendance data and generating reports. |
| **Features** | 1. Display real-time attendance status |
|  | 2. Generate daily, weekly, and monthly reports |
|  | 3. Visualize attendance trends with charts |
|  | 4. Export data to Excel/PDF formats |

---

## Tools & Technologies (1 Page)

### Software

| Tool | Purpose |
|------|---------|
| Python 3.10 | Main programming language for backend logic |
| OpenCV | Image processing and webcam capture |
| face_recognition library | Facial detection and recognition |
| SQLite | Database for storing student and attendance data |
| Streamlit | Web interface for dashboard |
| Pandas | Data manipulation for reports |
| Matplotlib | Data visualization for charts |

### Hardware

| Equipment | Purpose |
|-----------|---------|
| Laptop/Computer | Run the attendance system software |
| HD Webcam (720p+) | Capture video feed for face detection |
| Optional: External display | Show real-time attendance to students |

### Integration

The system workflow is as follows:

1. The **webcam** captures video frames continuously
2. **OpenCV** processes each frame and sends it to the **Face Detection** module
3. Detected faces are passed to **face_recognition** library for identification
4. Recognized students are recorded by the **Attendance Manager** using **SQLite**
5. Teachers access the **Streamlit dashboard** to view attendance and generate **Pandas/Matplotlib** reports

All software components are integrated into a single Python application that can run on any standard laptop.

---

## Algorithms (½ Page)

### Algorithm 1: Histogram of Oriented Gradients (HOG)

| Aspect | Details |
|--------|---------|
| **What it does** | HOG is used for face detection - finding where faces are located in an image. |
| **Why chosen** | HOG was chosen over Haar Cascades because it provides better accuracy with fewer false positives. It's also faster than deep learning methods like MTCNN while maintaining good accuracy. |
| **How we use it** | HOG analyzes the gradient directions in image regions to identify face-like patterns, returning bounding box coordinates for each detected face. |

### Algorithm 2: Deep Metric Learning (dlib ResNet)

| Aspect | Details |
|--------|---------|
| **What it does** | This neural network converts face images into 128-dimensional embeddings (numerical representations). |
| **Why chosen** | The pre-trained dlib ResNet model achieves 99.38% accuracy on the LFW benchmark. It's more robust to variations in lighting, angle, and expression compared to simpler methods like Eigenfaces. |
| **How we use it** | Each student's face is converted to an embedding during registration. During attendance, new face embeddings are compared to stored embeddings using Euclidean distance. |

### Algorithm 3: K-Nearest Neighbors (KNN)

| Aspect | Details |
|--------|---------|
| **What it does** | KNN classifies which student a face embedding belongs to based on similarity. |
| **Why chosen** | KNN works well with small to medium datasets (typical class sizes of 20-40 students). It doesn't require retraining when new students are added. |
| **How we use it** | When a face embedding is computed, KNN finds the K most similar embeddings in the database and returns the most common student ID. |

---

## Users (½ Page)

### User Group 1: Teachers

| Aspect | Details |
|--------|---------|
| **Usage** | 1. Start attendance session at beginning of class |
|  | 2. Monitor real-time recognition on dashboard |
|  | 3. Manually override incorrect recognitions |
|  | 4. View daily attendance summary after class |
|  | 5. Generate weekly reports for administration |

### User Group 2: School Administrators

| Aspect | Details |
|--------|---------|
| **Usage** | 1. Access school-wide attendance statistics |
|  | 2. Identify students with concerning attendance patterns |
|  | 3. Generate compliance reports for ministry |
|  | 4. Manage student database (add/remove students) |

### User Group 3: Parents

| Aspect | Details |
|--------|---------|
| **Usage** | 1. Receive SMS/email notifications when child is absent |
|  | 2. View child's attendance history via parent portal |
|  | 3. Submit absence justifications online |

### User Group 4: Students

| Aspect | Details |
|--------|---------|
| **Usage** | 1. View personal attendance record |
|  | 2. Receive reminders about attendance percentage |
|  | 3. Register face during enrollment |

---

## Social Impact & Limitations (½ Page)

### Social Impacts (Advantages)

1. **Increased Teaching Time:** Teachers gain 10+ minutes per class for actual instruction, potentially adding 30+ hours of teaching time per semester.

2. **Early Intervention:** Automated pattern detection allows counselors to identify at-risk students before attendance becomes critical.

3. **Reduced Administrative Work:** Digital records eliminate paper filing and enable instant report generation.

4. **Fairness:** Eliminates human bias in attendance tracking and prevents proxy attendance.

### Limitations (Disadvantages)

| Limitation | Future Solution |
|------------|-----------------|
| **Privacy Concerns:** Facial data storage raises privacy issues | Implement data encryption and automatic deletion policies. Obtain consent from parents/students. |
| **Lighting Dependency:** Recognition accuracy drops in poor lighting | Add infrared camera support for low-light conditions |
| **Initial Setup Time:** Registering all students' faces takes time | Create batch registration process with school ID photos |
| **Hardware Requirement:** Requires webcam and computer in each classroom | Partner with school for phased rollout; start with high-priority classrooms |

---

## References

1. Ministry of Education Malaysia. (2023). *Survey on Classroom Time Utilization*. Retrieved from [URL]

2. Universiti Malaya Department of Education. (2022). *Comparative Study of Attendance Tracking Methods in Malaysian Schools*. Journal of Educational Technology, 15(3), 45-62.

3. King, D. E. (2009). *Dlib-ml: A Machine Learning Toolkit*. Journal of Machine Learning Research, 10, 1755-1758.

4. Dalal, N., & Triggs, B. (2005). *Histograms of oriented gradients for human detection*. CVPR.

5. GeeksForGeeks. (2023). *Why is it Important to Learn System Design?* Retrieved from https://www.geeksforgeeks.org/why-is-it-important-to-learn-system-design/

---

## User Interface

### Figure 1: Home Page

[Image placeholder]

The home page serves as the landing point for all users. The navigation bar at the top provides access to different sections based on user role. The main area displays a welcome message and quick-start button to begin attendance taking.

### Figure 2: Attendance Recording Page

[Image placeholder]

This is the primary interface for teachers during class. The center displays the live webcam feed with bounding boxes drawn around detected faces. Student names appear above their faces along with confidence scores. The right panel shows:
- Number of students marked present (e.g., 28/32)
- List of present students with timestamps
- List of absent students highlighted in red

Teachers can manually adjust records using the edit buttons if recognition errors occur.

### Figure 3: Reports Dashboard

[Image placeholder]

The reports dashboard provides administrators with attendance analytics. Features include:
- Line chart showing attendance trends over time
- Pie chart of overall attendance rate
- Table of students with lowest attendance
- Export buttons for Excel and PDF formats
