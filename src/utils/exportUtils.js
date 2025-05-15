import jsPDF from 'jspdf';

/**
 * Export data as a PDF file.
 * @param {Array<Object>} data - The data to be exported.
 * @param {string} [filename='applications.pdf'] - The name of the PDF file.
 */
export function exportToPDF(data, filename = 'applications.pdf') {
  const doc = new jsPDF();

  // Simple title
  doc.setFontSize(18);
  doc.text('Job Applications', 14, 22);

  doc.setFontSize(12);

  // Prepare table headers (keys of first object)
  const headers = Object.keys(data[0]);

  // Prepare table rows: extract values from each data object
  const rows = data.map(app => headers.map(header => String(app[header])));

  // Add table headers
  let startY = 30;
  headers.forEach((header, i) => {
    doc.text(header, 14 + i * 40, startY);
  });

  // Add table rows
  rows.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      doc.text(cell, 14 + cellIndex * 40, startY + 10 + rowIndex * 10);
    });
  });

  doc.save(filename);
}

/**
 * Export data as a JSON file.
 * @param {Array|Object} data - The data to be exported.
 * @param {string} [filename='applications.json'] - The name of the JSON file.
 */
export function exportToJSON(data, filename = 'applications.json') {
  const jsonString = JSON.stringify(data, null, 2); // Pretty print JSON
  const blob = new Blob([jsonString], { type: 'application/json' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export data as a CSV file.
 * @param {Array<Object>} data - The data to be exported.
 * @param {string} [filename='applications.csv'] - The name of the CSV file.
 */
export function exportToCSV(data, filename = 'applications.csv') {
  if (!Array.isArray(data) || data.length === 0) {
    console.error('Invalid data: Cannot export empty or non-array data to CSV.');
    return;
  }

  // Convert array of objects to CSV format
  const csvHeaders = Object.keys(data[0]).join(','); // Header row
  const csvRows = data.map((row) =>
    Object.values(row)
      .map((value) => `"${String(value).replace(/"/g, '""')}"`) // Escape double quotes
      .join(',')
  );
  const csvString = [csvHeaders, ...csvRows].join('\n'); // Combine headers and rows

  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}