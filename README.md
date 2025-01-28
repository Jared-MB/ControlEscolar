# Control Escolar

Control Escolar es un sistema de control de calificaciones de estudiantes en la escuela.

## Instalación

### SERVER

- Crear un entorno virtual con Python (opcional)

```bash
python -m venv [ENVIRONMENT_NAME]
# Para activar el entorno virtual
/[ENVIRONMENT_NAME]/Scripts/activate
```

- Instalar dependencias

```bash
pip install -r requirements.txt
```

- Crear la base de datos

```bash
python manage.py migrate
```

- Iniciar el servidor de desarrollo

```bash
python manage.py runserver
```

### CLIENT

- Instalar dependencias

```bash
cd client

# npm
npm install

# pnpm
pnpm import
pnpm install
```

- Iniciar el servidor de desarrollo

```bash
# npm
npm run dev

# pnpm
pnpm dev
```

## Stack

### Backend

- Django
- SQLite

### Frontend

- React (Vite)
- Tailwind CSS
