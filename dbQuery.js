const dbQuery = require('./dbQuery');

app.get('/api/compliance-rules', async (req, res, next) => {
  try {
    const rules = await dbQuery.all('SELECT * FROM compliance_rules WHERE active = ?', [1]);
    res.json({ success: true, data: rules });
  } catch (err) {
    next(err); // Automatically caught by Express/global error handler
  }
});
