module.exports = function toReadable (number) {
    var words = new Array();
    words[0] = 'zero';
    words[1] = 'one';
    words[2] = 'two';
    words[3] = 'three';
    words[4] = 'four';
    words[5] = 'five';
    words[6] = 'six';
    words[7] = 'seven';
    words[8] = 'eight';
    words[9] = 'nine';
    words[10] = 'ten';
    words[11] = 'eleven';
    words[12] = 'twelve';
    words[13] = 'thirteen';
    words[14] = 'fourteen';
    words[15] = 'fifteen';
    words[16] = 'sixteen';
    words[17] = 'seventeen';
    words[18] = 'eighteen';
    words[19] = 'nineteen';
    words[20] = 'twenty ';
    words[30] = 'thirty ';
    words[40] = 'forty ';
    words[50] = 'fifty ';
    words[60] = 'sixty ';
    words[70] = 'seventy ';
    words[80] = 'eighty ';
    words[90] = 'ninety ';
    number = number.toString();
    var atemp = number.split(".");
    var amount = atemp[0].split(",").join("");
    var n_length = amount.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = amount.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value];
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += " crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += " lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += " thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += " hundred ";
            } else if (i == 6 && value != 0) {
                words_string += " hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
    }
    return words_string;
}
