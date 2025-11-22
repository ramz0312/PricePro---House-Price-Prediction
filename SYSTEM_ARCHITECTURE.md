SYSTEM ARCHITECTURE - PricePro

## High-Level Overview
PricePro uses a tiered architecture where the Frontend communicates with a Node/Express API Gateway, which delegates the core numerical task (prediction) to a dedicated Python/Flask ML service.

## Data Flow for Price Prediction:

1.  **User Input (React):** User  $\to$ Enters property data (Area, Perks, Size).
2.  **API Gateway:** React Frontend $\to$ Sends POST request to **Node.js/Express API** (`/api/v1/predict`).
3.  **ML Service Call:** Node.js API $\to$ Sends the property data to the **Python/Flask ML Service** (e.g., internal port 5000).
4.  **Prediction:** Flask Service $\to$ Loads the saved **ML Model** (from `/model` folder) $\to$ Preprocesses input data $\to$ Generates Price Prediction.
5.  **Result Return:** Flask Service $\to$ Returns JSON prediction $\to$ Node.js API $\to$ Returns JSON prediction $\to$ React Frontend displays the predicted price.

## Data Management:

* The **Database** stores user accounts and historical/perk data used for model training and feature scoring.
* The **Data** folder contains the raw and processed CSVs used to build the model.
