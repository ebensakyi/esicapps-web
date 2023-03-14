const XLSX = require('xlsx');
const post = async (req, res) => {
    try {
        const data = [
            { name: 'Diary', code: 'diary_code', author: 'Pagorn' },
            { name: 'Note', code: 'note_code', author: 'Pagorn' },
            { name: 'Medium', code: 'medium_code', author: 'Pagorn' },
          ]
          const workSheet = XLSX.utils.json_to_sheet(data);
          const workBook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
          XLSX.writeFile(workBook, "./public/temp/sample.xlsx");
  
      res.status(200).json();
    } catch (error) {
      console.log(error);
    }
  };



export default (req, res) => {
    req.method === "POST"
      ? post(req, res)
      : req.method === "PUT"
      ? console.log("PUT")
      : req.method === "DELETE"
      ? console.log("DELETE")
      : req.method === "GET"
      ? get(req, res)
      : res.status(404).send("");
  };
  