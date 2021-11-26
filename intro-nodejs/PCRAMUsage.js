const os = require('os');

const { arch, platform, totalmem, freemem } = os;
const tram = totalmem() / 1024 / 1024;
const fram = freemem() / 1024 / 1024;
const usage = (fram / tram) * 100;

const status = {
    OS: platform(),
    ARCH: arch(),
    TOTAL_RAM: parseInt(tram),
    FREE_RAM: parseInt(fram),
    USAGE: usage.toFixed(2),
}

module.exports = status;

setInterval(() => {
    const { arch, platform, totalmem, freemem } = os;
    const tram = totalmem() / 1024 / 1024;
    const fram = freemem() / 1024 / 1024;
    const usage = (fram / tram) * 100;

    const status = {
        OS: platform(),
        ARCH: arch(),
        TOTAL_RAM: `${parseInt(tram)}MB`,
        FREE_RAM: `${parseInt(fram)}MB`,
        USAGE: `${usage.toFixed(2)}%`,
    }

    console.clear();
    console.table(status);
}, 1000);