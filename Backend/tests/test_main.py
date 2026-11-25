from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_root_returns_hello_message():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World vom Backend"}


def test_unknown_route_returns_404():
    assert client.get("/gibt-es-nicht").status_code == 404