function onOpen() {
  DocumentApp.getUi()
    .createAddonMenu()
    .addItem('Ouvrir Marvelab', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('Marvelab')
    .setWidth(300);
  DocumentApp.getUi().showSidebar(html);
}

// Insertion dans le document (texte ou image)
function insertText(content) {
  const cursor = DocumentApp.getActiveDocument().getCursor();
  if (!cursor) {
    DocumentApp.getUi().alert('Placez le curseur dans le document.');
    return;
  }

  if (typeof content === 'string' && content.startsWith('http')) {
    const blob = UrlFetchApp.fetch(content).getBlob();
    cursor.insertInlineImage(blob);
  } else {
    cursor.insertText(content);
  }
}

