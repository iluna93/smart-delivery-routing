// ============================================================
// Mr. Treadmill Route App — Google Apps Script
// Deploy as Web App to enable the driver to update stop status
// ============================================================

// Deployment URL: https://script.google.com/macros/s/AKfycbze3UDF7Udgd3RZ_JgL46R197dBLn0d_0WVHPXzUzqxf3KDy38kJSsIGyV0ylVML4x82g/exec
const SHEET_ID   = '1pDJgC59ZO5sG6ftXY_cUZ_9Vz5Uh9CR40uqVxa8MaEM';
const SHEET_NAME = 'Sheet1';

// Called when driver marks a stop as Done or office cancels a stop
function doPost(e) {
  try {
    const data  = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    // Column J = 10 (STATUS), Column K = 11 (COMPLETION TIME), Column M = 13 (COMMENTS)
    sheet.getRange(data.rowIndex, 10).setValue(data.status);
    sheet.getRange(data.rowIndex, 11).setValue(data.completionTime || '');
    if (data.cancelReason) sheet.getRange(data.rowIndex, 13).setValue(data.cancelReason);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: called to read data (not needed if using Sheets API directly)
function doGet(e) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const data  = sheet.getDataRange().getValues();
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
