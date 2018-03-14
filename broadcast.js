var count = 0;
module.exports = function broadcast(msg, data) {

    //    return function () {
    count++;
    console.log('*' + count + '* ' + msg);
    if (!data == null) { console.log('*' + count + '* ', data); }
    //  }
}