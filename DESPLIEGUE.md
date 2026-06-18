# Despliegue del correo — guía

URL pública final (GitHub Pages):
**https://isabelfernandezsolo.github.io/landing-educacion/**

Los archivos del correo (imágenes y PDFs) ya apuntan a esa URL.

---

## FASE 1 — Publicar archivos y enviar el correo

### 1. Crear el repositorio y subir esta carpeta

Esta carpeta (`correo/`) será la raíz del sitio. Hazlo desde la **cuenta isabelfernandezsolo**.

> Tu CLI `gh` está logueado como otra cuenta (`jgraciadenodl`). Para automatizar con `gh`:
> `gh auth login` y entra con la cuenta de Isabel. O crea el repo a mano en github.com.

Desde esta carpeta:

```bash
cd "/Users/javiergracia/Documents/MAMA/proyecto_cursos_mail/correo"
git init
git add .
git commit -m "Correo y dossiers para GitHub Pages"
git branch -M main

# Opción A — con gh (logueado como isabelfernandezsolo):
gh repo create landing-educacion --public --source=. --push

# Opción B — repo creado a mano en github.com (vacío):
git remote add origin https://github.com/isabelfernandezsolo/landing-educacion.git
git push -u origin main
```

### 2. Activar GitHub Pages

En el repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**
→ Branch: `main` / carpeta `/ (root)` → **Save**.

Espera 1–2 min. Comprueba que estos enlaces abren:
- https://isabelfernandezsolo.github.io/landing-educacion/dossier-investigacion-aplicada.pdf
- https://isabelfernandezsolo.github.io/landing-educacion/assets/email/programa-investigacion.png

### 3. Enviar el correo

El archivo a enviar es **`email-comercial.html`** (es el cuerpo del correo, NO se aloja en Pages).

- **Pocos destinatarios + estadísticas**: instala **Mailtrack** o **Streak** en Gmail
  (gratis, marca aperturas/clicks). Pega el HTML en el cuerpo del correo.
- **Lista / newsletter + estadísticas serias**: usa **Brevo** o **Mailchimp** (plan gratis).
  Crea una campaña, pega el HTML, importa la lista y envía.

> Truco: como los PDFs están en Pages, en la FASE 2 podrás contar tú mismo cada descarga.

---

## FASE 2 — Capturar correos en Google Sheets (gratis)

Objetivo: que el botón lleve a un formulario, se guarde el contacto y luego se descargue el PDF.

```
Botón del email → Landing con formulario (GitHub Pages)
  → POST a Google Apps Script (gratis)
  → escribe la fila en Google Sheet
  → redirige al PDF
```

Pasos cuando lleguemos aquí:
1. Crear un Google Sheet (ej. columnas: fecha, nombre, email, programa).
2. Extensiones → Apps Script: pegar un script `doPost` que haga `appendRow` y devuelva
   una redirección al PDF. Publicar como **app web** (acceso: cualquiera).
3. Crear `landing.html` en este repo con un `<form>` que apunte a la URL del Apps Script.
4. Cambiar en `email-comercial.html` el botón "Solicitar información" (y, si se quiere,
   los "Ver dossier") para que apunten a `landing.html?programa=...` en vez de al PDF.

Todo dentro del plan gratuito de GitHub + Google.
