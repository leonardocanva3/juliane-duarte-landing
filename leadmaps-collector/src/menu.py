from dataclasses import dataclass

from src.config import APP_NAME, VERSION
from src.utils import limpar_texto

VALID_STATES = {
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
}


@dataclass(frozen=True)
class MenuData:
    niche: str
    state: str


def print_header() -> None:
    separator = "=" * 49
    print(separator)
    print(APP_NAME)
    print(f"Versão {VERSION}")
    print(separator)


def read_required_field(label: str) -> str:
    while True:
        print(label)
        value = limpar_texto(input("> "))
        if value:
            return value
        print("Campo obrigatório. Informe um valor válido.")


def read_state() -> str:
    while True:
        state = read_required_field("Informe o estado (UF):").upper()
        if state in VALID_STATES:
            return state
        print("UF inválida. Informe uma sigla válida, como SP, PR ou RJ.")


def print_summary(menu_data: MenuData) -> None:
    separator = "=" * 49
    print(separator)
    print("Resumo")
    print(f"Nicho: {menu_data.niche}")
    print(f"Estado: {menu_data.state}")
    print(separator)


def confirm() -> bool:
    while True:
        print("Confirmar?")
        print("[S] Sim")
        print("[N] Não")
        answer = limpar_texto(input("> ")).upper()
        if answer == "S":
            return True
        if answer == "N":
            return False
        print("Opção inválida. Informe S ou N.")


def collect_menu_data() -> MenuData | None:
    print_header()
    niche = read_required_field("Informe o nicho:").upper()
    state = read_state()
    menu_data = MenuData(niche=niche, state=state)
    print_summary(menu_data)

    if confirm():
        return menu_data
    return None
