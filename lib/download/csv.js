import ExcelJs from 'exceljs';
import { saveAs } from 'file-saver';
import { DateTime } from 'luxon';

export const csv = async (rows) => {
  // create workbook
  const workbook = new ExcelJs.Workbook();

  // create worksheet
  const worksheet = workbook.addWorksheet('Sheet1');

  // add rows
  rows.map((row, i) =>
    row.map((cell, j) => (worksheet.getCell(i + 1, j + 1).value = cell))
  );

  // write file to buffer
  const buffer = await workbook.csv.writeBuffer({ base64: true });

  // create blob for saving
  const blob = new Blob([buffer], {
    type: 'text/csv',
  });

  // get date
  const date = DateTime.now().toFormat('yyyyMMddhhmmss');

  // save file
  await saveAs(blob, `data-${date}.csv`);
};
