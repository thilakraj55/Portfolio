# TRON Portfolio (Flask)

## Requirements
- Python 3.10+

## Setup
```bash
python -m venv venv
venv\Scripts\activate
pip install -r template/requirements.txt
```

## Run
```bash
python template/app.py
```
Then open:
- http://127.0.0.1:5000/
- http://127.0.0.1:5000/about
- http://127.0.0.1:5000/projects
- http://127.0.0.1:5000/contact
- http://127.0.0.1:5000/login

## Notes
- The app keeps the non-standard folder name `template/`.
- Static files are served from `template/static/` via Flask's default `static_folder` behavior.

