
/*
app.get('/', (request, response) => {
    const page = parseInt(request.query.page) || 1;
    const pageSize = parseInt(request.query.pageSize) || 10; 
    const offset = (page - 1) * pageSize;
    const paginatedQuery = 'SELECT * FROM elev LIMIT ? OFFSET ?';
    connection.query(paginatedQuery, [pageSize, offset], function (error, results) {
      if (error) {
        console.error('Error fetching paginated results:', error);
        response.status(500).send('Error fetching data');
        return;
      }
      const countQuery = 'SELECT COUNT(*) AS count FROM elev';
      connection.query(countQuery, function (countError, countResults) {
        if (countError) {
          console.error('Error fetching count:', countError);
          response.status(500).send('Error fetching count');
          return;
        }
        response.json({
          data: results,
          total: countResults[0].count,
          currentPage: page,
          pageSize: pageSize
        });
      });
    });
  });
  */