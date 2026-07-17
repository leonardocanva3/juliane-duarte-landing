from datetime import datetime
import re
import unicodedata


def normalizar_espacos(texto: str) -> str:
    return " ".join(texto.strip().split())


def limpar_texto(texto: str) -> str:
    texto_sem_controle = "".join(
        char for char in texto if unicodedata.category(char)[0] != "C"
    )
    return normalizar_espacos(texto_sem_controle)


def normalizar_telefone(telefone: str) -> str:
    return re.sub(r"\D", "", telefone)


def gerar_timestamp() -> str:
    return datetime.now().strftime("%Y%m%d_%H%M%S")
