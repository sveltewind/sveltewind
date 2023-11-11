import ExcelJs from 'exceljs';
import { saveAs } from 'file-saver';
import { DateTime } from 'luxon';

export const xlsx = async (headers, body) => {
  // create workbook
  const workbook = new ExcelJs.Workbook();

  // create worksheet
  const worksheet = workbook.addWorksheet('Sheet1');

  // initiate table object
  const table = {
    columns: [],
    name: 'Table1',
    ref: 'A1',
    rows: [],
    style: {
      showRowStripes: true,
      theme: 'TableStyleMedium2',
    },
    totalsRow: true,
  };

  // add columns
  headers.map((header) => {
    table.columns.push({
      filterButton: true,
      name: header,
    });
  });

  // add data
  body.map((row, i) => {
    table.rows.push([]);
    row.map((cell) => table.rows[i].push(cell));
  });

  // add a table to the sheet
  worksheet.addTable(table);

  // update fonts
  workbook.eachSheet((worksheet) => {
    worksheet.eachRow((row, i) => {
      row.eachCell(
        (cell) =>
          (cell.font = {
            color: { argb: i === 1 ? 'FFFFFFFF' : 'FF000000' },
            name: 'Arial',
            size: 10,
          })
      );
    });
  });

  // write file to buffer
  const buffer = await workbook.xlsx.writeBuffer();

  // create blob for saving
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });

  // get date
  const date = DateTime.now().toFormat('yyyyMMddhhmmss');

  // save file
  await saveAs(blob, `data-${date}.xlsx`);
};
