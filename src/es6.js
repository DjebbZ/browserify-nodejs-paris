class Toto {
    constructor(numArr) {
        this.numArr = numArr;
    }

    double() {
        return this.numArr.map(n => n *2);
    }
}

export default Toto;