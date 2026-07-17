from src.logger import get_logger
from src.menu import MenuData, collect_menu_data


def main() -> None:
    logger = get_logger()
    logger.info("Application started")

    menu_data: MenuData | None = collect_menu_data()
    if menu_data is None:
        logger.info("Operation canceled by user")
        print("Operação cancelada.")
        return

    logger.info(
        "Collector prepared for niche=%s state=%s",
        menu_data.niche,
        menu_data.state,
    )
    print("Projeto preparado para receber o motor de raspagem.")


if __name__ == "__main__":
    main()
