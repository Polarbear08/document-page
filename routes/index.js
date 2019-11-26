var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* download button action*/
function downloadZip() {
  const filename = 'apache_node_doc.zip'
  const pathname = '../static/apache_node_doc.zip'
  const anchor = document.createElement('a')
  anchor.href = pathname
  anchor.download = filename
}

downloadBtn = document.getElementById('dl-button')
downloadBtn.addEventListener('click', downloadZip, false)