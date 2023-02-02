var express = require("express");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");

router.post(
  "/subcategorysubmit",
  upload.single("icon"),
  function (req, res, next) {
    console.log(req.body);
    pool.query(
      "insert into paynrent.subcategory (subcategoryname, categoryname, icon, priority) values(?,?,?,?)",
      [
        req.body.subcategoryname,
        req.body.categoryname,
        req.file.filename,
        req.body.priority,
      ],
      function (error, result) {
        if (error) {
          console.log(error);
          res.status(500).json([]);
        } else if (result) {
          console.log(result);
          res.status(200).json({ result: result });
        }
      }
    );
  }
);

module.exports = router;
