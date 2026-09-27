# UI Sketch & Mockup Guide

This guide helps you create professional UI designs for your System Design Proposal.

---

## Phase 1: Low-Fidelity Sketches

### Why Sketch First?
- **Fast iteration:** Change ideas in seconds, not hours
- **No attachment:** Easier to discard bad ideas
- **Focus on structure:** Layout before aesthetics
- **Team collaboration:** Everyone can draw boxes!

### Tools for Sketching

| Tool | Best For | Link |
|------|----------|------|
| Paper & Pencil | Fastest brainstorming | N/A |
| Google Jamboard | Remote collaboration | [jamboard.google.com](https://jamboard.google.com/) |
| Excalidraw | Digital hand-drawn look | [excalidraw.com](https://excalidraw.com/) |

### Sketching Tips

1. **Use boxes for elements:**
   ```
   ┌─────────────────────────────────┐
   │         Navigation Bar          │
   ├─────────────────────────────────┤
   │                                 │
   │        Main Content Area        │
   │                                 │
   ├─────────────────────────────────┤
   │           Footer                │
   └─────────────────────────────────┘
   ```

2. **Label everything:** Write what each box represents

3. **Show user flow:** Number the screens in order of interaction

4. **Include placeholders:**
   - `[ Image ]` for images
   - `[ Button ]` for clickable elements
   - `═══════` for text paragraphs

---

## Phase 2: High-Fidelity Mockups

### Recommended Tools

| Tool | Difficulty | Best For | Link |
|------|------------|----------|------|
| Canva | Easy | Beginners, quick mockups | [canva.com](https://www.canva.com/) |
| Draw.io | Easy | Diagrams, flowcharts | [app.diagrams.net](https://app.diagrams.net/) |
| Figma | Medium | Professional designs | [figma.com](https://www.figma.com/) |

### Canva Quick Start

1. Go to canva.com and create free account
2. Search for "website mockup" or "app mockup" templates
3. Customize colors, text, and images
4. Download as PNG or PDF

### Design Principles

#### 1. Consistency
- **Same colors** throughout all pages
- **Same fonts** (max 2 font families)
- **Same spacing** between elements
- **Same button styles** for similar actions

#### 2. Visual Hierarchy
```
BIGGEST = Most Important (Page Title)
Medium = Secondary Important (Section Headers)
smallest = Supporting Info (Descriptions)
```

#### 3. Color Usage
- **Primary color:** Main brand color (buttons, headers)
- **Secondary color:** Supporting elements
- **Neutral colors:** Text, backgrounds
- **Accent color:** Highlights, alerts

**Example palette:**
```
Primary:    #2563EB (Blue)
Secondary:  #10B981 (Green)
Neutral:    #374151 (Gray)
Background: #F9FAFB (Light Gray)
```

#### 4. White Space
- Don't crowd elements together
- Give content room to breathe
- Empty space guides the eye

---

## Common Page Templates

### 1. Home Page Layout
```
┌─────────────────────────────────────┐
│  Logo    │  Nav Items  │  Login     │
├─────────────────────────────────────┤
│                                     │
│     Hero Section: Big Title         │
│     + Subtitle + CTA Button         │
│                                     │
├─────────────────────────────────────┤
│   Feature 1  │  Feature 2  │  F3    │
│   [icon]     │  [icon]     │ [icon] │
│   text       │  text       │ text   │
├─────────────────────────────────────┤
│     About Section / How It Works    │
├─────────────────────────────────────┤
│           Footer                    │
└─────────────────────────────────────┘
```

### 2. AI Feature Page Layout
```
┌─────────────────────────────────────┐
│            Navigation               │
├─────────────────────────────────────┤
│                                     │
│   INPUT AREA                        │
│   ┌───────────────────────────┐     │
│   │  Upload Image / Text Box  │     │
│   │  or Video Feed           │     │
│   └───────────────────────────┘     │
│                                     │
│   [Submit Button]                   │
│                                     │
├─────────────────────────────────────┤
│   RESULTS AREA                      │
│   ┌───────────────────────────┐     │
│   │  Detection Results        │     │
│   │  Predictions             │     │
│   │  Confidence Scores       │     │
│   └───────────────────────────┘     │
│                                     │
└─────────────────────────────────────┘
```

### 3. Dashboard Layout
```
┌─────────────────────────────────────┐
│  Logo  │        Search        │User │
├────────┼────────────────────────────┤
│        │                            │
│  Side  │   Stats Cards Row          │
│  Menu  │   [#1] [#2] [#3] [#4]      │
│        │                            │
│  - Home├────────────────────────────┤
│  - Data│                            │
│  - Rep │   Main Chart / Graph       │
│  - Set │                            │
│        ├────────────────────────────┤
│        │   Data Table               │
│        │   Row 1 | Data | Data      │
│        │   Row 2 | Data | Data      │
│        │                            │
└────────┴────────────────────────────┘
```

---

## AI-Specific UI Components

### Face Detection Display
```
┌─────────────────────────────────────┐
│         Webcam Feed                 │
│    ┌──────────┐                     │
│    │   Face   │ ← Bounding Box      │
│    │  [Name]  │ ← Label             │
│    │  (95%)   │ ← Confidence        │
│    └──────────┘                     │
│                                     │
└─────────────────────────────────────┘
```

### Object Detection Display
```
┌─────────────────────────────────────┐
│         Image/Video                 │
│    ┌────┐  ┌────┐                   │
│    │Cat │  │Dog │ ← Multiple boxes  │
│    │0.97│  │0.89│ ← Confidence      │
│    └────┘  └────┘                   │
│                                     │
│  Detected: Cat (97%), Dog (89%)     │
└─────────────────────────────────────┘
```

### Prediction Results Display
```
┌─────────────────────────────────────┐
│   Prediction: [HIGH RISK]           │
│                                     │
│   Confidence: ████████░░ 85%        │
│                                     │
│   Factors:                          │
│   - Age: 45 (contributes 30%)       │
│   - BMI: 28 (contributes 25%)       │
│   - BP: High (contributes 30%)      │
│                                     │
│   [View Details] [Save Report]      │
└─────────────────────────────────────┘
```

### Chatbot Interface
```
┌─────────────────────────────────────┐
│  🤖 AI Assistant                    │
├─────────────────────────────────────┤
│                                     │
│  User: Hello!                       │
│                                     │
│  Bot: Hi! How can I help you        │
│       today?                        │
│                                     │
│  User: What are your hours?         │
│                                     │
│  Bot: We are open Monday-Friday     │
│       from 9 AM to 6 PM.            │
│                                     │
├─────────────────────────────────────┤
│  Type message...      [Send]        │
└─────────────────────────────────────┘
```

---

## Writing UI Explanations

### Template for Each Page

```markdown
### [Page Name]

![Page Screenshot](image.png)

**Purpose:** [What is this page for?]

**Key Components:**
1. **[Component 1]:** [What it does]
2. **[Component 2]:** [What it does]
3. **[Component 3]:** [What it does]

**User Interactions:**
- User can [action 1] by [how to do it]
- User can [action 2] by [how to do it]

**AI Integration:**
[Explain how AI features appear on this page]
```

### Example Explanation

```markdown
### Face Detection Page

![Face Detection Interface](face-detection.png)

**Purpose:** This is the main page where teachers record attendance
using facial recognition.

**Key Components:**
1. **Webcam Feed:** Center panel showing live video with face
   detection overlays
2. **Attendance Panel:** Right sidebar showing present/absent lists
3. **Controls:** Buttons to start/stop recording, manual override

**User Interactions:**
- Teacher clicks "Start" to begin face detection
- Teacher can manually mark students using the override button
- Teacher clicks "End Session" to save attendance

**AI Integration:**
The face detection module processes each video frame, drawing
green bounding boxes around detected faces. When a face is
recognized, the student's name appears above the box with a
confidence percentage. Unrecognized faces show "Unknown".
```

---

## Checklist Before Finalizing

### Sketch Phase
- [ ] Drew 2-3 key pages
- [ ] Labeled all components
- [ ] Showed user flow between pages
- [ ] Got instructor feedback

### Mockup Phase
- [ ] Consistent color scheme
- [ ] Readable text sizes
- [ ] Clear call-to-action buttons
- [ ] AI features are prominently shown
- [ ] Professional appearance

### Documentation Phase
- [ ] Each page has explanation
- [ ] Purpose is clearly stated
- [ ] Components are listed
- [ ] User interactions described
- [ ] AI integration explained

---

## Resources

### Free Icons
- [Heroicons](https://heroicons.com/)
- [Feather Icons](https://feathericons.com/)
- [Font Awesome](https://fontawesome.com/icons)

### Free Stock Images
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)

### Color Palette Generators
- [Coolors](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)

### UI Inspiration
- [Dribbble](https://dribbble.com/) - Design inspiration
- [Behance](https://www.behance.net/) - Project showcases

---

Good luck with your UI design! Remember: **Clarity over creativity** - users should understand your interface instantly.
