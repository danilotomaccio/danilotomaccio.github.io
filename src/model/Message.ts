export class NigmaMessage {
    readonly id: string;
    readonly text: string;
    readonly sender: string;

    constructor(text: string, sender: string) {
        this.id = Math.random().toString(16).slice(2);
        this.text = text;
        this.sender = sender;
    }
}