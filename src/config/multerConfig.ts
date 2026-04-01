import multer from "multer";
import path from "path";
import fs from "fs";

const tmpFolder = path.resolve(process.cwd(), "uploads");
if (!fs.existsSync(tmpFolder)) {
  fs.mkdirSync(tmpFolder);
}

export const uploadPDF = multer({
  dest: tmpFolder,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Formato inválido! Apenas arquivos PDF são permitidos."));
    }
  },
});