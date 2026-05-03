# Chatbot core functions for Streamlit app
# This file contains all the NLP model functions

import json
import nltk
from pathlib import Path
from nltk.stem import snowball
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.tree import DecisionTreeClassifier
import random
from datetime import datetime

# Download NLTK data (run once)
nltk.download('punkt', quiet=True)
nltk.download('punkt_tab', quiet=True)

# Initialize stemmer
snowballStemmer = snowball.SnowballStemmer("english")

# Data structures
intent_list = []
train_data = []
train_label = []
responses = {}
list_of_words = []

# Initialize vectorizer and classifier
vectorizer = CountVectorizer()
clf_dt = DecisionTreeClassifier(random_state=33)

def text_preprocessing(sentence):
    """
    Preprocess text: tokenize, stem, and clean.

    Args:
        sentence: Raw text input

    Returns:
        Preprocessed string with stemmed tokens
    """
    tokens = nltk.word_tokenize(sentence)
    stem_tokens = []
    for token in tokens:
        if token.isalnum():
            stem_tokens.append(snowballStemmer.stem(token.lower()))
    return " ".join(stem_tokens)

def load_model():
    """
    Load training data from intents.json, extract features, and train the model.
    Call this function before using bot_respond().
    """
    global intent_list, train_data, train_label, responses, list_of_words

    # Clear previous data
    intent_list = []
    train_data = []
    train_label = []
    responses = {}

    # Load training data from JSON (dataset is in parent data/ folder)
    data_file = Path(__file__).resolve().parent.parent / "data" / "intents.json"
    with open(data_file, encoding="utf-8") as f:
        data = json.load(f)

    # Process each intent
    for intent in data['intents']:
        for text in intent['text']:
            preprocessed_text = text_preprocessing(text)
            train_data.append(preprocessed_text)
            train_label.append(intent['intent'])

        intent_list.append(intent['intent'])
        responses[intent['intent']] = intent["responses"]

    # Feature extraction
    vectorizer.fit(train_data)
    list_of_words = vectorizer.get_feature_names_out()
    train_data_bow = vectorizer.transform(train_data)

    # Train the model
    clf_dt.fit(train_data_bow, train_label)

    print("✅ Model loaded and trained!")

def bot_respond(user_query):
    """
    Generate chatbot response for user query.

    Args:
        user_query: User's text input

    Returns:
        Bot's response string
    """
    # Preprocess user input
    user_query = text_preprocessing(user_query)
    user_query_bow = vectorizer.transform([user_query])

    clf = clf_dt

    # Predict intent
    predicted = clf.predict(user_query_bow)

    # Handle low confidence predictions
    max_proba = max(clf.predict_proba(user_query_bow)[0])
    if max_proba < 0.3:
        predicted = ['noanswer']

    # Generate response
    bot_response = ""
    numOfResponses = len(responses[predicted[0]])
    chosenResponse = random.randint(0, numOfResponses - 1)

    # Handle time query specially
    if predicted[0] == "TimeQuery":
        bot_response = f"It's {datetime.now().strftime('%H:%M:%S')}"
    else:
        bot_response = responses[predicted[0]][chosenResponse]

    return bot_response

# Run this file directly to test
if __name__ == "__main__":
    load_model()
    print("\nTesting bot_respond:")
    print(f"  'Hello' -> {bot_respond('Hello')}")
    print(f"  'What time is it?' -> {bot_respond('What time is it?')}")
    print(f"  'Thank you' -> {bot_respond('Thank you')}")
