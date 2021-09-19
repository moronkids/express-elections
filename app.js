const express = require('express'); // call bunch method of express
const morgan = require('morgan'); // morgan is dependency for middleware
// import route
const cors = require('cors');
const articleRouter = require('./src/routes/CalonRoutes');
const costumerRouter = require('./src/routes/CustomerRoutes');
const trxRouter = require('./src/routes/TrxRoutes');
// import route
// initial app variable
const app = express();
app.use(express.static(`${__dirname}/public`));

app.use(cors({
  origin: 'http://localhost:3000',
}));
// 1. MIDDLEWARE
// must in on top of all route
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev')); // morgan middleware
}
app.use(express.json()); // own middleware
app.use((req, res, next) => {
  console.log('middleware');
  next();
});

// 2. ROUTES
// always using specific version like v1
// app.get("/api/v1/list", getList); //simple version
app.use('/api/v1/calon', articleRouter);
app.use('/api/v1/customer', costumerRouter);
app.use('/api/v1/trx', trxRouter);

module.exports = app;
