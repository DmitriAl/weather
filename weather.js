#!/user/bin/env node
import { getArgs } from './helpers/args.js';

const iniCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        // vivod help
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        // save token
    }
    // vivesti pogodu
};

iniCLI();