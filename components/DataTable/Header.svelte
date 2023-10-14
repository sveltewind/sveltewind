<script>
  import ExcelJs from 'exceljs';
  import { saveAs } from 'file-saver';
  import { DateTime } from 'luxon';
  import {
    Button,
    Card,
    Checkbox,
    Fieldset,
    Icon,
    Input,
    Radio,
  } from '../index.js';
  import {
    ChevronUpDown,
    DocumentArrowDown,
    ViewColumns,
  } from '../icons/index.js';
  import HeaderItem from './HeaderItem.svelte';

  // types
  /**
   * @typedef Column
   * @property {import('svelte').SvelteComponent} [component]
   * @property {Boolean} [export]
   * @property {String} [key]
   * @property {String} label
   * @property {{}} [props]
   * @property {Slot} [slot]
   * @property {Boolean} [sortable]
   * @property {Function} [sortFn]
   * @property {Boolean} [visible]
   *
   * @typedef {{[key:string]: any}} Row
   *
   * @typedef Table
   * @property {{filterButton?: Boolean, name: String, totalsRowLabel?: String}[]} columns
   * @property {String} [displayName]
   * @property {Boolean} [headerRow]
   * @property {String} name
   * @property {String} ref
   * @property {[][]} rows
   * @property {{showColumnStripes?: Boolean, showFirstColumn?: Boolean, showLastColumn?: Boolean, showRowStripes?: Boolean, theme?: String}} [style]
   * @property {Boolean} [totalsRow]
   *
   * @typedef Slot
   * @property {Function} [valueFn]
   */

  // handlers
  const exportHandler = async () => {
    try {
      if (exportType === 'Clipboard') {
        const text = [
          columns
            .filter(
              (column) => column?.export !== false && column?.visible !== false
            )
            .map(({ label }) => label)
            .join('\t'),
          ...paginatedRows.map((row) =>
            columns
              .filter(
                (column) =>
                  column?.export !== false && column?.visible !== false
              )
              .map((column) => {
                let cellValue = '';
                if (column?.key !== undefined) cellValue = row[column.key];
                if (column?.slot?.valueFn !== undefined)
                  cellValue = column.slot.valueFn(row);

                return cellValue;
              })
              .join('\t')
          ),
        ].join('\r\n');
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
          document.execCommand('copy');
        } catch (error) {
          console.log(error);
        }
        document.body.removeChild(textarea);
      }
      if (exportType === 'CSV' || exportType === 'XLSX') {
        // create workbook
        const workbook = new ExcelJs.Workbook();

        // create worksheet
        const worksheet = workbook.addWorksheet('Sheet1');

        // initiate table object
        /** @type {Table} */
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
        columns
          .filter(
            (column) => column?.export !== false && column?.visible !== false
          )
          .map(({ label }, i) => {
            if (exportType === 'CSV')
              worksheet.getCell(getExcelCell(i, 1)).value = label;
            if (exportType === 'XLSX')
              table.columns.push({
                filterButton: true,
                name: label === '' ? `Column${i + 1}` : label,
              });
          });

        // add data
        paginatedRows.map((row, i) => {
          if (exportType === 'XLSX') table.rows.push([]);
          columns
            .filter(
              (column) => column?.export !== false && column?.visible !== false
            )
            .map((column, j) => {
              let cellValue = '';
              if (column?.key !== undefined) cellValue = row[column.key];
              if (column?.slot?.valueFn !== undefined)
                cellValue = column.slot.valueFn(row);

              if (exportType === 'CSV')
                worksheet.getCell(getExcelCell(j, i + 2)).value = cellValue;
              if (exportType === 'XLSX') table.rows[i].push(cellValue);
            });
        });

        // add a table to the sheet
        if (exportType === 'XLSX') worksheet.addTable(table);

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
        let buffer;
        if (exportType === 'CSV')
          buffer = await workbook.csv.writeBuffer({ base64: true });
        if (exportType === 'XLSX')
          buffer = await workbook.xlsx.writeBuffer({ base64: true });

        // initate mimeTypes
        const mimeTypes = {
          CSV: 'text/csv',
          XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        };

        // create blob for saving
        const blob = new Blob([buffer], {
          type: mimeTypes[exportType],
        });

        // get date
        const date = DateTime.now().toFormat('yyyyMMddhhmmss');

        // save file
        await saveAs(blob, `data-${date}.${exportType.toLowerCase()}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Function to get excel from column and row indexes
   * @param {Number} column
   * @param {Number} row
   */
  const getExcelCell = (column, row) =>
    `${String.fromCharCode(column + 65)}${row}`;

  // props (external)
  export let /** @type {Column[]} */ columns = [];
  export let exportType = 'XLSX';
  export let paginate = true;
  /** @type {Row[]}*/
  export let paginatedRows = [];
  export let rowsPerPage = 10;

  // props (internal)
  const exports = [{ value: 'Clipboard' }, { value: 'CSV' }, { value: 'XLSX' }];
</script>

<Card
  class="flex flex-row rounded-none rounded-t items-center justify-end py-[.5rem] px-[1.5rem] space-x-[.5rem] shadow-none dark:shadow-none"
>
  <slot>
    <HeaderItem src={ChevronUpDown}>
      <svelte:fragment slot="icon">
        <Icon class="rotate-90" src={ChevronUpDown} />
      </svelte:fragment>
      <Checkbox bind:checked={paginate}>
        <div class="whitespace-nowrap">Paginate?</div>
      </Checkbox>
      <Fieldset legend="Rows per page">
        <Input
          bind:value={rowsPerPage}
          class="md:hidden"
          disabled={paginate ? undefined : 'disabled'}
          min="1"
          type="tel"
        />
        <Input
          bind:value={rowsPerPage}
          class="hidden md:block"
          disabled={paginate ? undefined : 'disabled'}
          min="1"
          type="number"
        />
      </Fieldset>
    </HeaderItem>
    <HeaderItem src={DocumentArrowDown}>
      {#each exports as { value }}
        <Radio bind:group={exportType} {value}>{value}</Radio>
      {/each}
      <Button on:click={exportHandler}
        ><div class="relative">Export</div></Button
      >
    </HeaderItem>
    <HeaderItem src={ViewColumns}>
      {#each columns as { label, visible }}
        <Checkbox bind:checked={visible}>
          <div class="whitespace-nowrap">
            {label}
          </div>
        </Checkbox>
      {/each}
    </HeaderItem>
    <slot name="extraSettings" />
  </slot>
</Card>
