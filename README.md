# Food Calorie Estimation

## 📌 Project Overview
This project is a **Food Calorie Estimation** web application that allows users to upload an image of food, process it, and predict the estimated calorie count using a machine learning model. The application is built using Flask for the backend and HTML/CSS with Bootstrap for the frontend.

## 🚀 Features
- 📷 **Image Upload:** Users can upload images in `.png`, `.jpg`, or `.jpeg` formats.
- 🔍 **Calorie Prediction:** Uses a trained model to estimate calorie content.
- 🎨 **Attractive UI:** Designed with a modern and user-friendly interface.
- ⚡ **Real-time Processing:** Provides quick predictions.

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, Bootstrap
- **Backend:** Flask (Python)
- **Machine Learning Model:** TensorFlow/PyTorch (if applicable)

## 📂 Project Structure
```
├── Dataset               # Basic food images are Test and Trained 
├── Food data Backup      # Some more food data that can be used 
├── static/               # Static files (CSS, JS, images)
├── templates/            # HTML templates
│   ├── base1.html        # Base template
│   ├── index.html        # Home page
├── Uploads               # uploaded images are stored 
├── app.py                # Flask application
├── detectObject.py       # Food Detection         
├── model/                # Machine learning model (if applicable)
├── README.md             # Project documentation
├── requirements.txt      # Python dependencies
```

## 🔧 Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/food-calorie-estimation.git
   cd food-calorie-estimation
   ```
2. **Create a virtual environment (optional but recommended):**
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```
3. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```
4. **Run the Flask application:**
   ```sh
   python app.py
   ```
5. **Open in browser:**  
   Visit `http://127.0.0.1:5000/` to use the application.

## 🖼️ Usage
- Click on **Choose Image** and upload a food image.
- Click on **Predict!** to get the estimated calorie count.
- View the results displayed on the screen.

## 🤖 Model Information (If Applicable)
If this project uses a machine learning model for calorie estimation, provide details about:
- Dataset used
- Model architecture
- Training process

## 🏆 Future Enhancements
- 📌 Improve model accuracy
- 📌 Deploy the app online (AWS, Heroku, etc.)
- 📌 Add support for multiple food items in a single image
- 📌 Capture food images directly from a camera

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📩 Contact
For questions or contributions, feel free to reach out at `yashasgm07@gmail.com` or open an issue on GitHub.

---
🔗 **GitHub Repository:** [(https://github.com/Yashasgm07/Food-Calorie-Estimation.git)]

