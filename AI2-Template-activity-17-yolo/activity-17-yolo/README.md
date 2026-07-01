# Activity 17 — YOLO Object Detection

> **🛠️ Stack for this lesson** — Python / Ultralytics YOLOv8 / OpenCV · runs in Google Colab (image, video) and locally (webcam).
> 📥 Template: [/learn/ai2/template/activity-17-yolo](/learn/ai2/template/activity-17-yolo)

A YOLOv8 starter kit using the pre-trained nano model (`yolov8n.pt`, 6.5MB) over the 80 COCO classes. You'll load the model, run detection on an image, then a video, then a live webcam, then count specific classes — the same workflow used in real surveillance, retail, and autonomous-driving prototypes.

**Time:** ~90 minutes · **Concept:** Concept 17 — Object Detection

---

## What You'll Build

Six small Python scripts, each focused on one stage of an object-detection pipeline. 6 outcome-driven TODOs:

| File | Focus | Outcome |
|------|-------|---------|
| `1-Setup.py` | Environment check | Ultralytics + OpenCV versions print without error |
| `2-Model.py` | Load weights | YOLO loads `yolov8n.pt` and dumps 80 class names to `class_names.txt` |
| `3-Image.py` | Image detection | Boxes + labels drawn over `outing.jpg` |
| `4-Video.py` | Frame loop | `video.mp4` plays with detections; `q` exits cleanly |
| `5-Webcam.py` | Live capture | Webcam frames detect in real time (run locally) |
| `Advanced-1.py` | Class counting | Cat / person counts printed for `advanced1.jpg` and `advanced2.jpg` |

Read each file, infer what the TODO needs, and write it. There are no commented-out answers.

## Run It

```bash
pip install -r requirements.txt
python 1-Setup.py
python 2-Model.py
python 3-Image.py
python 4-Video.py
python 5-Webcam.py     # local only — Colab has no webcam
python Advanced-1.py
```

In Colab, run the same files cell-by-cell after `!pip install ultralytics`. YOLO auto-detects GPU; on CPU expect ~5–10 FPS for video.

## 🔬 Data Investigation

> **📓 Where this lives now:** open your lesson note for this activity.
> Click **Take Notes** at the top of the lesson page if you don't already have a note —
> it creates one titled `<Lesson title> — <COURSE>` with a scaffold pre-filled from
> the lesson headings. Add an H2 section titled **`Investigation`** to that note and put
> your work there. The note persists across devices and is queryable by the AI Tutor.
>
> 💡 **Tip:** open the AI Tutor while viewing your note and ask
> *"help me draft my Investigation findings for [topic]"*. The Tutor will append a draft to your note;
> you can drag it into the **Investigation** section if it lands elsewhere.

**Prompts to answer in your note:**

YOLO will return *some* detections on almost any image — the question is whether the model is right. AI assistants happily report counts; they don't reliably check that the boxes are tight or that confidences make sense. Your job in `Advanced-1.py` is to look at the boxes, not just trust the counts.

1. **What you checked.** Confidence threshold, eyeball check of bounding boxes, did the count match what you saw with your own eyes?
2. **What you found.** Were any objects double-counted? Any false positives ("cat" classified on a dog)? Any missed ones?
3. **What you fixed.** Did you raise the confidence threshold? Filter by class? Use `iou` non-max-suppression tighter?
4. **What this would mean in production.** If a retailer used this for shelf inventory, what's the cost of an over-count versus an under-count?

"YOLO said 3 cats" earns 0 — verify it.

## Verify

Your activity is done when:

- [ ] `1-Setup.py` prints both library versions.
- [ ] `2-Model.py` writes `class_names.txt` containing all 80 COCO classes.
- [ ] `3-Image.py` displays `outing.jpg` with at least one bounding box and a label like `person 0.87`.
- [ ] `4-Video.py` plays the video with detections frame-by-frame and exits on `q`.
- [ ] `5-Webcam.py` runs locally and tracks at least one object live.
- [ ] `Advanced-1.py` prints person and cat counts for both advanced images.
- [ ] Investigation section in your lesson note covers the counting accuracy.

## Stretch

Pick one and note what you tried in your reflection:
- Filter detections to only the `person` class using `model(img, classes=[0])`.
- Add an FPS counter overlay to `5-Webcam.py` so you can see local performance live.
- Save the video output via `cv.VideoWriter` so you can replay your detections.
- Try a heavier model (`yolov8s.pt`) and compare detection counts on `advanced1.jpg` against the nano model.

## 🪞 Reflect on Your Work

Answer in 2-3 sentences each, in this README under your TODO commits. Your tutor reads these as part of grading.

1. **What did you learn that you didn't know before?** Name the most surprising thing — a bug you hit, a syntax quirk, a way YOLO surprised you (good or bad detection).
2. **How did you collaborate with AI?** If you used Claude / ChatGPT / Cursor / Copilot, what part of the work did *you* contribute — the prompt, the verification, the design decision, the bug-fix? If you didn't use AI, what was the hardest thing to figure out alone?
3. **How do you know your code works?** Describe one specific thing you did to confirm — a screenshot you took, a count you double-checked by eye, a confidence score you sanity-checked.

> AI is a great collaborator. Owning your thinking, verifying the output, and explaining your design choices is what *learning* looks like in this course.

## Submit

When the Verify checklist is green, head to **[/learn/ai2/certification](/learn/ai2/certification)** and submit your scripts plus 2–3 screenshots of detections.

<!-- claude-template-fix: readme-v3 -->

<!-- claude-template-fix: notes-migration-v1 -->
