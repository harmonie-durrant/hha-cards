# hha-cards

![HHA-Cards](https://github.com/harmonie-durrant/hha-cards/blob/main/.github/HHA%20Cards.png?raw=true)

HHA Cards, `aka: Harmonie Home Assistant Cards`, is a collection of cool customizable cards for Home Assistant. (HA)

## Table of Contents

- [Installation](#installation)
- [How To Use](#how-to-use)
- [Cards List](#cards-list)
  - [Person Card](#person-card)
- [Contributing](#contributing)
- [Donate](#donate)

## Installation

### HACS Installation (Recommended)
Use this button to add the repository to your HACS:

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=harmonie-durrant&repository=hha-cards&category=frontend)

or follow these steps:
1. Add this repository to HACS by including it as a custom repository:
  - Go to `HACS` > `Integrations` > `⋮` > `Custom repositories`.
  - Paste the URL of this repository and select Lovelace as the category.
2. Install the Entity Progress Card from HACS.

### Manual Installation

1. Download the file `dist/hha-cards.js` to the `/config/www/` directory in your Home Assistant setup.
2. Add `/local/hha-cards.js` to your Lovelace resources
```yaml
url: /local/hha-cards.js
type: module
```
3. if you are updating just replace the old file with the new and refresh your cache

## How to use

Every card is available in the visual editor and has the following variables you can add to it:

- `entity`: Target of the card
- `layout`: 'horizontal' or 'vertical' layouts for the cards (optional, default: 'horizontal')
- `icon`: Icon override
- `color`: Icon color overrice

## Cards List

### Person Card

![Person card example](docs/examples/person.png)

`charge_state_entity`: Battery state to track for the charging animation (optional, example: 'sensor.battery_state')

## Contributing

Feel free to fork this repo and submit your changes through pull requests, or to suggest a feature/report a bug, make an issue in the issues tab of this repository.

## Donate

[Buy me a coffee.](https://buymeacoffee.com/harmonie)
