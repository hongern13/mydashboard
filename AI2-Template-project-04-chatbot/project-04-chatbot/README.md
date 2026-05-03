# Project 04 — Intent-Classification Chatbot

> **🛠️ Stack for this lesson** — Python / NLTK / scikit-learn / Streamlit · notebook runs in Google Colab; Streamlit UI runs locally.
> 📥 Template: [/learn/ai2/template/project-04-chatbot](/learn/ai2/template/project-04-chatbot)

A two-part NLP project: train an intent classifier on a small `intents.json` knowledge base, then wrap it in a Streamlit chat interface. You'll write the same preprocessing → vectorizing → predicting pipeline a real intent-based virtual assistant uses.

**Time:** ~5–7 hours (notebook 3–4h, Streamlit 2–3h) · **Concept:** Concepts 07 + 10 + 11

---

## What You'll Build

A working classifier that picks the right canned response for a user message, plus a Streamlit UI that exposes it. 8 outcome-driven TODOs across two parts:

| Part | Focus | Outcome |
|------|-------|---------|
| 1. Notebook | NLP pipeline | `text_preprocessing`, BoW vectorizer, three classifiers, `bot_respond` returning a response |
| 2. Streamlit | UI integration | Sidebar nav + chat input wired to `chatbot.py` |

Read each cell / file, infer what the TODO needs, and write it. There are no commented-out answers.

## Run It

```python
# Colab notebook cell
!pip install nltk scikit-learn pandas
import nltk; nltk.download('punkt'); nltk.download('punkt_tab')
```

```bash
# Streamlit UI (locally)
cd streamlit
pip install streamlit nltk scikit-learn pandas
streamlit run app.py
```

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

The `intents.json` file has a small, hand-curated training set — typical of real chatbot bootstrapping. Real intent classifiers fail in two predictable ways: they over-confidently match unrelated user messages to a known intent, and the intent vocabulary is unbalanced (some intents have many examples, others have one or two).

1. **What you checked.** Count of training examples per intent, accuracy on a held-out 20% split, predictions on out-of-vocabulary user phrases ("what's the weather", "give me a stock tip").
2. **What you found.** Which intents are under-represented? What does the model predict for inputs nothing like the training data?
3. **What you fixed.** Did you add a confidence threshold ("if max prob < 0.3, return 'I don't know'")? Did you augment the smallest intents?
4. **What this would mean in production.** A chatbot that confidently answers "yes" to "transfer my money to Nigeria" is dangerous — how would you stop yours from doing that?

"It answers greetings correctly" earns 0 — stress-test the model.

## Verify

Your project is done when:

- [ ] All 8 TODOs run with no exceptions.
- [ ] `text_preprocessing("We all agreed, it was a magnificent evening.")` returns `"we all agre it was a magnific even"`.
- [ ] All three classifiers (KNN, DT, NB) train and predict.
- [ ] "Hello there" predicts the `Greeting` intent on Naive Bayes.
- [ ] `bot_respond("Hello there")` returns one of the responses listed under `Greeting`.
- [ ] Streamlit app loads, sidebar switches between Home and Chatbot pages, chat input shows responses.
- [ ] Investigation section in your lesson note documents out-of-vocabulary stress tests.

## Stretch

Pick one and note what you tried in your reflection:
- Add a confidence threshold so unknown inputs get an "I'm not sure" reply instead of a wrong intent.
- Add three new intents to `intents.json` and retrain — does accuracy hold up?
- Replace BoW with `TfidfVectorizer` and explain how it changes the classifier's behavior on rare words.

## 🪞 Reflect on Your Work

Answer in 2-3 sentences each, in this README under your TODO commits. Your tutor reads these as part of grading.

1. **What did you learn that you didn't know before?** Name the most surprising thing — a bug you hit, a syntax quirk, an out-of-vocabulary input that confused the bot in an interesting way.
2. **How did you collaborate with AI?** If you used Claude / ChatGPT / Cursor / Copilot, what part of the work did *you* contribute — the prompt, the verification, the design decision, the bug-fix? If you didn't use AI, what was the hardest thing to figure out alone?
3. **How do you know your code works?** Describe one specific thing you did to confirm — a conversation transcript you read, an intent you stress-tested, a Streamlit screenshot you saved.

> AI is a great collaborator. Owning your thinking, verifying the output, and explaining your design choices is what *learning* looks like in this course.

## Submit

When the Verify checklist is green, head to **[/learn/ai2/certification](/learn/ai2/certification)** and submit your notebook link and your Streamlit `app.py`; your Investigation note section will be graded from your Knowledge Notebook.

<!-- claude-template-fix: readme-v3 -->

<!-- claude-template-fix: notes-migration-v1 -->
