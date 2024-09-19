//% color="#AA278D" block="Meine Erweiterung"
namespace meineErweiterung {
    //% block="sage Hallo"
    export function sagHallo(): void {
        basic.showString("Hallo")
    }
}


//% color="#AA278D" block="Webserial Erweiterung"
namespace webserialErweiterung {
    //% block="erhöhe Wert $wert um 1000 und sende via Webserial"
    export function sendeWert(wert: number): void {
        let neuerWert = wert + 1000;
        serial.writeLine("Gesendeter Wert: " + neuerWert);
    }
}
