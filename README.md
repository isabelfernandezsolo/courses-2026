# courses-2026

Campaña de correo institucional para los programas formativos 2026: correo HTML
comercial, dossiers en PDF y landing de captación de contactos.

El sitio se publica con **GitHub Pages** desde la raíz de este repositorio:
**https://isabelfernandezsolo.github.io/courses-2026/**

## Contenido

| Archivo | Descripción |
|---|---|
| `email-comercial.html` | Cuerpo del correo a enviar (no se aloja en Pages). |
| `landing.html` | Landing con formulario de captación (FASE 2). |
| `apps-script.gs` | Script de Google que guarda los contactos en una Sheet. |
| `dossier-*.pdf` | Dossiers de cada programa, servidos desde Pages. |
| `assets/email/` | Imágenes del correo. |

## Documentación

- **`DESPLIEGUE.md`** — guía para publicar en GitHub Pages y enviar el correo.
- **`FASE2.md`** — captación de contactos en Google Sheets (formulario → PDF).

## Publicar cambios

```bash
git add .
git commit -m "Actualizar correo / dossiers"
git push
```

GitHub Pages se actualiza solo 1–2 minutos después de cada push a `main`.
