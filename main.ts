//% color="#AA278D" block="Computermusik"
namespace meineErweiterung {

    // Block 1: Hallo World Block
    //% block="sage Hallo Welt"
    export function sagHallo(): void {
        basic.showString("Hallo Welt");
    }

    // Block 2: +1000 und Webserial senden
    //% block="erhöhe Wert $wert um 1000 und sende via Webserial"
    export function sendeWert(wert: number): void {
        let neuerWert = wert + 1000;
        serial.writeLine("Gesendeter Wert: " + neuerWert);
    }
}
