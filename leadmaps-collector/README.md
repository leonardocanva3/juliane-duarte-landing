# LeadMaps Collector

Infraestrutura inicial para o projeto LeadMaps Collector.

Esta etapa prepara a base do coletor com menu interativo, validação de entrada,
logger profissional, configurações centrais e funções utilitárias. Nenhuma
lógica de scraping foi implementada neste momento.

## Instalação

Crie e ative um ambiente virtual:

```bash
python -m venv .venv
```

Windows:

```bash
.venv\Scripts\activate
```

macOS/Linux:

```bash
source .venv/bin/activate
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

Instale os navegadores do Playwright:

```bash
playwright install
```

## Executar

```bash
python collector.py
```

O programa solicitará o nicho e a UF, exibirá um resumo e aguardará confirmação.
