import chalk from "chalk";
import dedent from "dedent-js";
const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ')  + ' ' + error);
}
const printSuccuss = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ')  + ' ' + message);
}
const printHelp = () => {
    console.log(dedent
        `
            ${chalk.bgCyan(' HELP ')}
            -s [CITY] for set city
            -h for help
            -t [API_KEY] for saving token
        `
    );
};
const printWeather = (response, icon) => {
    console.log(dedent
    `
    ${chalk.bgYellowBright( ' Weather ' )} City weather ${response.name}
    ${icon}  - ${response.weather[0].description}
    Temperature: ${response.main.temp} (feels like ${response.main.feels_like})
    Humidity: ${response.main.humidity}%
    Wind speed: ${response.wind.speed}
    `);
};

export {printError, printSuccuss, printHelp, printWeather};