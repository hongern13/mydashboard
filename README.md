# Activity 14 — Image Processing

> **🛠️ Stack for this lesson** — Python / OpenCV / NumPy · runs in Google Colab.
> 📥 Template: [/learn/ai2/template/activity-14-image-processing](/learn/ai2/template/activity-14-image-processing)

An OpenCV image transformation notebook. You'll resize, switch color spaces (BGR / Gray / HSV / RGB), detect edges with Canny, and smooth with Gaussian blur — the four operations underpinning most classical CV pipelines.

**Time:** ~30 minutes · **Concept:** Concept 14 — Image Processing

---

## What You'll Build

A small library of working image-processing calls applied to two sample images. 2 outcome-driven TODOs:

| Question | Focus | Outcome |
|----------|-------|---------|
| Q1. Resize | `cv.resize` + `INTER_AREA` | `outing_large.jpg` displayed at 20% of its original size |
| Q2. Convert | Color spaces + filters | `cats.jpg` shown in gray, HSV, RGB, then with Canny edges and Gaussian blur |

Read each cell, infer what the TODO needs, and write it. There are no commented-out answers.

## Run It

```python
# Colab cell 1
!pip install opencv-python-headless
from google.colab.patches import cv2_imshow
```

Then run the notebook top-to-bottom; each TODO renders an image for you to inspect.

## Verify

Your activity is done when:

- [ ] `outing_large.jpg` resized to 20% displays at roughly one-fifth the original dimensions.
- [ ] `cv.resize` uses `INTER_AREA` (correct interpolation when shrinking).
- [ ] Grayscale, HSV, and RGB versions of `cats.jpg` all display with the right tonal characteristics.
- [ ] Canny output is a binary image of edges only, not a faded grayscale.
- [ ] Gaussian blur uses an odd kernel size (e.g. `(7, 7)`) and produces a visibly softer image.
- [ ] You can explain in one sentence when you'd convert to HSV vs. grayscale.

## Stretch

Pick one and note what you tried in your reflection:
- Run the same Canny call with thresholds `(50, 100)` and `(150, 250)`; compare what survives in each.
- Use HSV thresholding to mask only the *cat-orange* hues in `cats.jpg`.
- Replace the static scale factor with one computed from `cv.CAP_PROP_FRAME_WIDTH` so the resize works on any input image.

## 🪞 Reflect on Your Work

Answer in 2-3 sentences each, in this README under your TODO commits. Your tutor reads these as part of grading.

1. **What did you learn that you didn't know before?** Name the most surprising thing — a bug you hit, a syntax quirk, the way OpenCV's BGR ordering trips you up when you switch to matplotlib.
2. **How did you collaborate with AI?** If you used Claude / ChatGPT / Cursor / Copilot, what part of the work did *you* contribute — the prompt, the verification, the design decision, the bug-fix? If you didn't use AI, what was the hardest thing to figure out alone?
3. **How do you know your code works?** Describe one specific thing you did to confirm — an image you compared side-by-side, a shape you printed, an edge map you read.

> AI is a great collaborator. Owning your thinking, verifying the output, and explaining your design choices is what *learning* looks like in this course.

## Submit

When the Verify checklist is green, head to **[/learn/ai2/certification](/learn/ai2/certification)** and submit your notebook link plus screenshots of the resized and edge-detected images.

<!-- claude-template-fix: readme-v3 -->
