// Function to export data as a JSON file
export function exportToJSON(data, filename = 'applications.json') {
  const jsonString = JSON.stringify(data, null, 2); // Pretty print JSON
  const blob = new Blob([jsonString], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Function to export data as a CSV file
export function exportToCSV(data, filename = 'applications.csv') {
  // Convert array of objects to CSV format
  const csvHeaders = Object.keys(data[0]).join(','); // Header row
  const csvRows = data.map((row) =>
    Object.values(row)
      .map((value) => `"${value}"`) // Escape values with quotes
      .join(',')
  );
  const csvString = [csvHeaders, ...csvRows].join('\n'); // Combine headers and rows

  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}