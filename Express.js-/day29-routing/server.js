const express = require('express');
const app = express();

app.get('/drugs/:id', (req,res) => {
  const {id} = req.params;
  res.json({message: `You asked for drug number ${id}`});
});

app.get('/drugs', (req, res) => {
  const {category, sortBy} = req.query;
  res.json({
    message: 'showing drugs',
    filterCategory: category,
    sortedBy: sortBy
 });
});

app.post('/drugs', (req, res) => {
  res.json({message: 'A new drug would be CREATED here'});
});

app.put('/drugs/:id', (req, res) => {
  const {id} = req.params;
  res.json({message: `Drug number ${id} would be UPDATED here`});
});

app.delete('/drugs/:id', (req, res) => {
  const {id} = req.params;
  res.json({message: `Drug number ${id} would be DELETED here`});
});

app.get('/drugs/:id/reviews', (req, res) => {
  const {id} = req.params;
  res.json({
    drugId: id,
    message: "Reviews for this drug is coming soon"
  });
});

app.listen(3000, () => {
  console.log('Server is listening at port 3000');
});
