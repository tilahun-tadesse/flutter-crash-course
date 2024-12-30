const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGO_DB_CONFIG } = require("./config/app.config");
const errors = require("./middleware/errors.js");
const swaggerUi = require("swagger-ui-express"), swaggerDocument = require("./swagger.json");
const categoryRoutes = require("./routes/category.route.js");
const productRoutes = require("./routes/products.route.js");

mongoose.Promise = global.Promise;
mongoose
  .connect(MONGO_DB_CONFIG.DM, {
    
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database can't be connected: " + error);
    }
  );


app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(process.env.port||5000, () => {
    console.log('Server started on port 5000');
})

