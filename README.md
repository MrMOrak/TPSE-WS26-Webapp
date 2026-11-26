# TPSE-WS26-Webapp

This project aims to create a file management system in the form of a web-based platform for the Geodesy department at TU Darmstadt. It helps staff organise, find and manage teaching materials, theses, administrative lists and research data.

> **Status:** Project kickoff: frontend and backend are running as "Hello World".

## Prerequisites

- Git
- Node.js (LTS) with npm
- Python 3.11 or newer with pip

## Install

```bash
git clone https://github.com/MrMOrak/TPSE-WS26-Webapp.git
cd TPSE-WS26-Webapp
```

Backend:

```bash
cd Backend
python3 -m venv .venv            # Windows: py -m venv .venv
source .venv/bin/activate        # Windows (cmd): .venv\Scripts\activate
                                 # Windows (PowerShell): .venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

Frontend:

```bash
cd WebApp
npm install
```

## Usage

Start backend and frontend in two separate terminals.

Backend (FastAPI), from `Backend/`:

```bash
uvicorn main:app --reload
```

Runs at http://localhost:8000 and returns `{"message": "Hello World vom Backend"}`.

Frontend (Next.js), from `WebApp/`:

```bash
npm run dev
```

Runs at http://localhost:3000 and shows the "Hello World" page.

Production build of the frontend: `npm run build` followed by `npm run start`.

## Tech Stack

| Layer                    | Technology                |
|--------------------------|---------------------------|
| Frontend (Presentation)  | TypeScript, React (Next.js) |
| Backend (Logic)          | Python (FastAPI)          |
| Database                 | PostgreSQL, search index  |

Monolithic web app with a layered architecture.

## Team

| Name                  | Mail                                                  |
|-----------------------|-------------------------------------------------------|
| Marcus Orak           | marcus.orak@stud.tu-darmstadt.de                      |
| Henriette Ulrich      | henriette.ulrich@stud.tu-darmstadt.de                 |
| Maria Angelina Rassino | maria_angelica.rassino@stud.tu-darmstadt.de          |
| Maximilian Manikowski | maximilian.manikowski@stud.tu-darmstadt.de            |
| Nicholas White        | nicholas.white@stud.tu-darmstadt.de                   |

## Reviews

The master branch is protected and can only be altered by issuing a pull-request. 
The PR is checked in accordance with these [criteria](./documentation/CODEREVIEW.md).
[Contribution guideline](./documentation/CONTRIBUTION.md).

## License

[MIT](https://opensource.org/licenses/MIT)
