/**
 * Google Apps Script — recibe los datos de la landing y los guarda en el Google Sheet.
 *
 * MONTAJE (resumido; pasos completos en FASE2.md):
 *  1. Crea un Google Sheet. En la primera pestaña pon estos encabezados en la fila 1:
 *       A1: Fecha   B1: Nombre   C1: Email   D1: Programa   E1: Consentimiento
 *     y renombra la pestaña a "Contactos".
 *  2. Extensiones -> Apps Script. Borra lo que haya y pega TODO este archivo.
 *  3. Implementar -> Nueva implementación -> Tipo: Aplicación web.
 *       - Ejecutar como: Yo
 *       - Quién tiene acceso: Cualquier persona
 *     Copia la URL (termina en /exec) y pégala en landing.html (APPS_SCRIPT_URL).
 *  4. Si cambias el código, crea una "Nueva versión" de la implementación.
 */

var NOMBRE_PESTANA = "Contactos";

function doPost(e) {
  try {
    var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(NOMBRE_PESTANA);
    var datos = JSON.parse(e.postData.contents);

    hoja.appendRow([
      new Date(),                 // Fecha
      datos.nombre || "",         // Nombre
      datos.email || "",          // Email
      datos.programa || "",       // Programa
      datos.consentimiento || ""  // Consentimiento
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Permite abrir la URL en el navegador para comprobar que está viva.
function doGet() {
  return ContentService.createTextOutput("Endpoint activo.");
}
