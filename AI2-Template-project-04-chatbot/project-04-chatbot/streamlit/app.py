# Streamlit Chatbot UI
# Run with: streamlit run app.py

# ✅ WORKING EXAMPLE: Import libraries
import streamlit as st
from chatbot import load_model, bot_respond

# ✅ WORKING EXAMPLE: Page config
st.set_page_config(
    page_title="Alex Chatbot",
    page_icon="🤖",
    layout="centered"
)

# ✅ WORKING EXAMPLE: Main title
st.title("🤖 Alex Chatbot")

# ⚠️ TODO 7: Create Sidebar with Page Navigation (Medium)
#
# Create a sidebar with:
# 1. Title: "Navigation"
# 2. Subheader: "Pages"
# 3. Selectbox with options: ["Home", "Chatbot"]
# 4. Assign selectbox result to variable 'app_mode'
#
# HINTS:
# - st.sidebar.title("Navigation")
# - st.sidebar.subheader("Pages")
# - app_mode = st.sidebar.selectbox("Select Page", ["Home", "Chatbot"])
#
# YOUR CODE HERE:
st.sidebar.title("Navigation")
st.sidebar.subheader("Pages")
app_mode = st.sidebar.selectbox("Select Page", ["Home", "Chatbot"])

# ✅ WORKING EXAMPLE: Home page
if app_mode == "Home":
    st.markdown("### Welcome to Alex Chatbot! 👋")
    st.markdown("Chat with me if you feel bored!")

    st.markdown("---")
    st.markdown("#### How Chatbots Work")
    st.video("https://youtu.be/Kn1HF3oD19c")

    st.markdown("---")
    st.info("👈 Select **Chatbot** from the sidebar to start chatting!")

# ⚠️ TODO 8: Implement Chatbot Page (Medium)
#
# Create the Chatbot page that:
# 1. Shows text "Please talk to me"
# 2. Loads the model (call load_model())
# 3. Creates text input for user
# 4. Displays bot response
#
# HINTS:
# - st.text("Please talk to me")
# - load_model()
# - text = st.text_input("You:")
# - Use st.spinner for loading indicator
#
# YOUR CODE HERE:
elif app_mode == "Chatbot":
    st.text("Please talk to me")

    # Load model (cached to avoid reloading)
    if 'model_loaded' not in st.session_state:
        with st.spinner("Loading chatbot model..."):
            load_model()
            st.session_state.model_loaded = True

    # User input
    text = st.text_input("You:", placeholder="Type your message here...")

    # Display response
    if text:
        st.write("**Alex:**")
        with st.spinner("Thinking..."):
            response = bot_respond(text)
            st.write(response)

# ✅ WORKING EXAMPLE: Footer
st.markdown("---")
st.caption("Built with 💜 using Streamlit and NLTK")
