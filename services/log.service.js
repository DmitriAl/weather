import chalk from 'chalk';
import dedent from 'dedent-js';
import { getTime, convertDateTime } from '../helpers/funcs.js';

const FORCAST_DICTIONARY = {
    degrees: '°C',
    metersPerSecond: 'м/с',
    millimetersOfMercury: 'мм рт.ст.',
};

const printError = (error) => {
    console.log(`${chalk.bgRed(' ERROR ')} ${error}`);
};

const printSuccess = (message) => {
    console.log(`${chalk.bgGreen(' SUCCESS ')} ${message}`);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без передачи параметров вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена
        `
    );
};

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgBlue(' WEATHER ')} Погода в городе ${chalk.blueBright(res.name)}
        ${icon}  ${res.weather[0].description}
        Температура: ${Math.round(res.main.temp)}${FORCAST_DICTIONARY.degrees} (ощущается как ${Math.round(res.main.feels_like)}${FORCAST_DICTIONARY.degrees})
        Влажность: ${res.main.humidity}%
        Давление: ${res.main.pressure} ${FORCAST_DICTIONARY.millimetersOfMercury}
        Скорость ветра: ${res.wind.speed} ${FORCAST_DICTIONARY.metersPerSecond}
        Восход солнца: ${getTime( convertDateTime(res.sys.sunrise) )}
        Закат солнца: ${getTime( convertDateTime(res.sys.sunset) )}
        `
    )
};

export { printError, printSuccess, printHelp, printWeather }