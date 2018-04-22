

class Calculator {
    constructor() {
        this.x = '';
        this.y = '';
        this.type = '';
        this.history = [];
        this.result = '';
    }

    compute() {
        if (this.type == '+') {
            this.result = Number(this.x) + Number(this.y);
        }
        else if( this.type == '-') {
            this.result = Number(this.x) - Number(this.y);
        }
        else if( this.type == '*') {
            this.result = Number(this.x) * Number(this.y);
        }
        else if( this.type == '/') {
            this.result = Number(this.x) / Number(this.y);
        }
        this.history.push(`${this.x} ${this.type} ${this.y} = ${this.result}`)
    }
}
module.exports = Calculator