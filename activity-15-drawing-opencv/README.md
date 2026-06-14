# Activity 15 — Drawing with OpenCV

> **🛠️ Stack for this lesson** — Python / OpenCV / NumPy · runs in Google Colab.
> 📥 Template: [/learn/ai2/template/activity-15-drawing-opencv](/learn/ai2/template/activity-15-drawing-opencv)

An OpenCV annotation notebook. You'll draw rectangles, circles, lines, and text on top of a real image — the same primitives every object-detection model uses to render bounding boxes.

**Time:** ~25 minutes · **Concept:** Concept 15 — Drawing on Images

---

## What You'll Build

Two annotated versions of `stevejob.png`: one with shapes positioned by simple coordinates, one with precise coordinates and styled text. 2 outcome-driven TODOs:

| Section | Focus | Outcome |
|---------|-------|---------|
| Basic drawing | Four primitives | Blue rectangle, green circle at center, red line, yellow text "Hello" |
| Advanced drawing | Precise placement | Blue box around the subject, green circle on a focal point, red horizontal line, yellow "Steve Job" text at fontScale 2.0 |

Read each cell, infer what the TODO needs, and write it. There are no commented-out answers.

## Run It

**Where to do your work:** open the `.ipynb` in [Google Colab](https://colab.research.google.com/). The two TODOs live in **cells 13 and 15** of the notebook — that's where you write code.

The `.py` files (`draw.py`, `advanced.py`) are *reference snippets* from earlier draft versions. You don't edit them; the graded deliverable is the `.ipynb`.

```python
# Colab cell 1
!pip install opencv-python-headless
from google.colab.patches import cv2_imshow
```

Then run the notebook top-to-bottom; each TODO renders the annotated image for you to inspect.

## Verify

Your activity is done when:

- [ ] Rectangle, circle, line, and text all appear on the basic version.
- [ ] BGR ordering is correct: blue is `(255, 0, 0)`, red is `(0, 0, 255)`, etc.
- [ ] Circle in the basic version is centered using `image.shape[1]//2, image.shape[0]//2`.
- [ ] Advanced version places the rectangle around the subject, not floating in empty space.
- [ ] Advanced "Steve Job" text uses `fontScale=2.0` and `thickness=5`.
- [ ] You can explain in one sentence why image origin `(0,0)` is top-left, not bottom-left.

## Stretch

Pick one and note what you tried in your reflection:
- Use `image.shape` to compute every coordinate, so the script works on a different-sized image without changes.
- Add a filled rectangle (`thickness=-1`) as a semi-transparent overlay using `cv.addWeighted`.
- Draw an `cv.ellipse` around the subject's face instead of a rectangle.

## 🪞 Reflect on Your Work

Answer in 2-3 sentences each, in this README under your TODO commits. Your tutor reads these as part of grading.

1. **What did you learn that you didn't know before?** Name the most surprising thing — a bug you hit, a syntax quirk, a coordinate convention that surprised you.
2. **How did you collaborate with AI?** If you used Claude / ChatGPT / Cursor / Copilot, what part of the work did *you* contribute — the prompt, the verification, the design decision, the bug-fix? If you didn't use AI, what was the hardest thing to figure out alone?
3. **How do you know your code works?** Describe one specific thing you did to confirm — an annotated image you eyeballed, a coordinate you adjusted by trial-and-error, a screenshot you saved.

> AI is a great collaborator. Owning your thinking, verifying the output, and explaining your design choices is what *learning* looks like in this course.

## Submit

When the Verify checklist is green, head to **[/learn/ai2/certification](/learn/ai2/certification)** and submit your notebook link plus screenshots of both annotated images.

<!-- claude-template-fix: readme-v3 -->
