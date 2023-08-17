// import QRCode from "qrcode";
const QRCode = require("qrcode");

interface Channel {
    url: string;
    channelName: string;
    fileName: string;
}
const urlArray = [
    "https://www.youtube.com/@codeorg",
    "https://www.youtube.com/@CoderbyteDevelopers",
    "https://www.youtube.com/@Codesmith",
    "https://www.youtube.com/@craigndave",
    "https://www.youtube.com/@decomplexify",
    "https://www.youtube.com/@Fireship",
    "https://www.youtube.com/@freecodecamp",
    "https://www.youtube.com/@funfunfunction",
    "https://www.youtube.com/@KevinPowell",
    "https://www.youtube.com/@NetNinja",
    "https://www.youtube.com/@TraversyMedia",
    "https://www.youtube.com/@WesBos",
];

const regexChannel = /.*@/;

function createChannelObjects(array: string[]): Channel[] {
    const channelObjects: Channel[] = array.map((url) => ({
        url,
        channelName: url.replace(regexChannel, ""),
        fileName: `qrcode_${url.replace(regexChannel, "")}.png`,
    }));
    return channelObjects;
}

function createQRCode(channelObject: Channel) {
    QRCode.toFile(
        `./src/outputImages/${channelObject.fileName}`,
        `${channelObject.url}`
    );
}

function createBatchQRCodes(channelObjects: Channel[]) {
    for (const element of channelObjects) {
        createQRCode(element);
    }
}

const channelObjects = createChannelObjects(urlArray);
createBatchQRCodes(channelObjects);
