app.get('/api/compliance-rules', (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 5;
  const offset = (page - 1) * limit;

  db.all('SELECT COUNT(*) as count FROM compliance_rules', [], (err, countResult) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    
    const totalItems = countResult[0].count;
    const totalPages = Math.ceil(totalItems / limit) || 1;

    db.all('SELECT * FROM compliance_rules LIMIT ? OFFSET ?', [limit, offset], (err, rows) => {
      if (err) return res.status(500).json({ success: false, message: err.message });

      res.json({
        success: true,
        data: rows,
        pagination: { currentPage: page, itemsPerPage: limit, totalItems, totalPages }
      });
    });
  });
});
