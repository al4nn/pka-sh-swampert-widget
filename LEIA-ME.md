# Shiny Swampert — widget para OBS

## Adicionar à live

1. No OBS, adicione uma fonte **Navegador**.
2. Marque **Arquivo local** e selecione o `index.html` desta pasta.
3. Configure **largura 1735** e **altura 280**.
4. Deixe desmarcada a opção de desligar a fonte quando não estiver visível.

A faixa mede **1735 × 240 px**, com **40 px de margem superior**, como no widget original. O logo sobreposto também foi preservado. O fundo fora da faixa é transparente.

## Atualizar brokes

Clique com o botão direito na fonte → **Interagir**. Passe o mouse sobre o contador:

- Clique no número para digitar um novo valor. Enter ou clique fora encerra a edição.
- Use **+1** e **−1**, ou as setas para cima/baixo enquanto edita.
- Os controles aparecem apenas com o mouse sobre o contador ou durante a edição. Afaste o mouse e clique fora para ocultá-los.

Valor inicial: **1.052**. Máxima: **9.400**. O contador é limitado a 0–9.400. A porcentagem indica apenas o progresso numérico em relação à máxima, não a probabilidade de captura.

O valor é salvo automaticamente no armazenamento local do navegador da fonte OBS. O navegador comum tem armazenamento separado. Mover ou renomear o arquivo, limpar os dados do navegador ou recriar o perfil pode perder esse armazenamento. Se o armazenamento estiver bloqueado, o contador funciona durante a sessão, mas não persiste ao recarregar.

## Arte e referências

- Pokémon: cópia de `D:\pka\pokemons\260.1.png`, preservando as cores fornecidas.
- Logo: copiado do widget de referência, sem alterar o original.
- `assets/images/lagoon.svg`: fundo vetorial original, ilustrado para esta faixa. Pode ser usado como imagem separada.
- Direção de ambiente: lagoa costeira, água turva, pedras, lama e vegetação. Referências consultadas:
  - https://www.pokemon.com/us/pokedex/swampert
  - https://bulbapedia.bulbagarden.net/wiki/Swampert_(Pok%C3%A9mon)

Tudo funciona localmente, sem fontes externas, downloads ou servidor.
