from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    print(f"Received prediction request for: {data}")
  
    return jsonify({"predicted_price": 500000, "confidence": 0.85})

@app.route('/')
def health_check():
    return "PricePro ML API is running!"

if __name__ == '__main__':
    app.run(debug=True, port=5000)
