app.get('/api/compliance-rules', (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 5;
  const offset = (page - 1) * limit;

  // Query to get total count for frontend metadata
  dbQuery('SELECT COUNT(*) as count FROM compliance_rules', [], (err, countResult) => {
    if (err) return next(err);
    
    const totalItems = countResult[0].count;
    const totalPages = Math.ceil(totalItems / limit) || 1;

    // Query to fetch the paginated subset of rules
    const sql = 'SELECT * FROM compliance_rules LIMIT ? OFFSET ?';
    dbQuery(sql, [limit, offset], (err, rows) => {
      if (err) return next(err);

      res.json({
        success: true,
        data: rows,
        pagination: {
          currentPage: page,
          itemsPerPage: limit,
          totalItems,
          totalPages,
        }
      });
    });
  });
});
