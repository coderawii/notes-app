const fs = require('fs');

fs.writeFileSync('notes.js', 'const getNotes = function(){ return "Your notes..."}');
fs.appendFileSync('notes.js', 'module.exports = getNotes;');