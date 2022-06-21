
const mysql = require("serverless-mysql")();
mysql.config({
  host: DB_HOST,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASS,
});

const executeQuery = (query, arraParms) => {
  return new Promise((resolve, reject) => {
    try {
      mysql.query(query, arraParms, (err, data) => {
        if (err) {
          console.log("error in executing the query");
          reject(err);
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { executeQuery };
