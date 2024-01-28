const express = require('express');
const router = express.Router();

// Static Routes
// Set up "public" folder / subfolders for static files
router.use(express.static("publics"));
router.use("/css", express.static(__dirname + "publics/css"));
router.use("/js", express.static(__dirname + "publics/js"));
router.use("/images", express.static(__dirname + "publics/images"));

module.exports = router;



