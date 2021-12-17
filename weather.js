#!/user/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан токен');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Токен сохранен');
    } catch (error) {
        printError(error.message);
    }
};

const iniCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        saveToken(args.t);
    }
    // vivesti pogodu
};

iniCLI();