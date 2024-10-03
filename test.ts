//% color="#AA278D" block="Computermusik"
namespace meineErweiterung {

    // Block 1: Hallo World Block
    //% block="hallo Musikapp"
    export function sagHallo(): void {
        basic.showString("Hallo Welt");
    }

    // Block 2: +1000 und Webserial senden
    //% block="sende $wert an die Musikapp"
    export function sendeWert(wert: number): void {
        let neuerWert = wert + 1000;
        serial.writeLine("Gesendeter Wert: " + neuerWert);
    }
}


