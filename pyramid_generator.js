function pyramidGenerator(str, int, bool) {
    let pyramid = "\n";

    if(bool) {
        for(let i = int; i > 0; i--) {
            pyramid += " ".repeat(int - i) + str.repeat(2 * i - 1) + "\n";
        }
    } else {
        for(let i = 0; i < int; i++) {
            pyramid += " ".repeat(int - i - 1) + str.repeat(2 * i + 1) + "\n";
        }
    }
    return pyramid;
}


console.log(pyramidGenerator("p", 5, false));