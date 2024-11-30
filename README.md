# WordCount

**WordCount** es un sencillo contador de palabras en línea, diseñado para ayudar a los usuarios a calcular la longitud de cualquier texto, párrafo o ensayo. Con su interfaz fácil de usar, WordCount proporciona una forma eficiente de rastrear el conteo de palabras y asegurarse de que tu escritura cumpla con requisitos específicos. Ya sea que estés trabajando en un trabajo académico, una publicación de blog o cualquier otra forma de contenido escrito, WordCount facilita mantener tu escritura concisa y efectiva.

## CI/CD Pipeline

Este proyecto utiliza GitHub Actions para automatizar el proceso de integración continua y despliegue.

## Flujo de trabajo

1. **Ejecución de pruebas**: Cada vez que se crea un pull request o se hace un push a la rama `uat`, GitHub Actions ejecuta las pruebas unitarias usando Jest.
2. **Construcción y Despliegue**: Si las pruebas pasan, este deploy se hace automáticamente a vercel.
3. **Requerimientos**: Debes tener al menos 4 pruebas unitarias para asegurar la cobertura mínima de pruebas en el proyecto.

## Archivos relevantes

- `.github/workflows/ci-cd-pipeline.yml`: El archivo que configura el flujo de trabajo de CI/CD.
- `package.json`: Contiene los scripts necesarios para ejecutar las pruebas, construir y desplegar la aplicación.

## Contribuidores

- Alan Nin - 1106735
- Ali Rizvi - 1109028
