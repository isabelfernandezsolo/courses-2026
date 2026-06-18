# FASE 2 — Capturar contactos en Google Sheets

Flujo:

```
Clic en el correo → landing.html (formulario + consentimiento RGPD)
  → guarda fila en Google Sheet (vía Apps Script)
  → redirige al PDF del dossier
```

Archivos implicados:
- `landing.html` — formulario (ya enruta los botones del correo aquí).
- `apps-script.gs` — código del servidor (se pega en Google).
- El correo `email-comercial.html` ya apunta sus botones a la landing.

---

## Paso 1 — Crear el Google Sheet

1. Crea un Google Sheet nuevo (en la cuenta de Isabel).
2. En la primera fila pon los encabezados:
   `Fecha | Nombre | Email | Programa | Consentimiento`
3. Renombra la pestaña a **`Contactos`** (clic derecho en la pestaña de abajo).

## Paso 2 — Pegar el Apps Script

1. En el Sheet: **Extensiones → Apps Script**.
2. Borra el contenido y pega **todo** `apps-script.gs`.
3. Guarda (icono de disquete).

## Paso 3 — Publicar como aplicación web

1. **Implementar → Nueva implementación**.
2. Tipo (rueda dentada): **Aplicación web**.
3. Configura:
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier persona**
4. **Implementar** y autoriza los permisos (te pedirá login; acepta).
5. Copia la **URL del Web App** (termina en `/exec`).

> La primera vez Google muestra "Esta app no está verificada": Configuración avanzada →
> "Ir a (nombre) (no seguro)" → Permitir. Es normal por ser tu propio script.

## Paso 4 — Conectar la landing

En `landing.html`, sustituye:

```js
var APPS_SCRIPT_URL = "PEGA_AQUI_URL_DEL_APPS_SCRIPT";
```

por la URL `/exec` que copiaste. Guarda y sube los cambios a GitHub (`git add . && git commit && git push`).

## Paso 5 — Probar

1. Abre `https://isabelfernandezsolo.github.io/landing-educacion/landing.html?programa=investigacion`
2. Rellena el formulario, marca el consentimiento y envía.
3. Comprueba que:
   - Aparece una fila nueva en el Sheet (con la fecha, datos y "Sí" en consentimiento).
   - El navegador te redirige a la descarga del PDF.

---

## Detalles técnicos / notas

- **CORS**: la landing envía con `fetch(..., {mode:'no-cors'})`. No puede leer la respuesta,
  pero la fila se guarda igual. Por eso la redirección al PDF la hace el propio JavaScript.
- **Si la URL del script aún es el placeholder**, el formulario igualmente redirige al PDF
  (no se pierde la descarga); simplemente no se guarda el contacto.
- **Consentimiento RGPD**: la casilla es obligatoria (`required`), así que sin marcarla no se
  envía. Se guarda "Sí" como prueba del consentimiento junto con la fecha.
- **Botón "Solicitar información"** (sin `?programa=`): no descarga PDF; muestra un mensaje de
  agradecimiento tras enviar.

## Si prefieres que algún dossier se descargue SIN formulario

En `email-comercial.html`, en ese botón, vuelve a poner la URL directa al PDF, p. ej.:
`https://isabelfernandezsolo.github.io/landing-educacion/dossier-investigacion-aplicada.pdf`
