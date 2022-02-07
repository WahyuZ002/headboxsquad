export var truncate = function (fullStr, strLen, separator) {
    if (fullStr.length <= strLen) return fullStr

    separator = separator || '...'

    var frontChars = 6,
        backChars = 4

    return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars)
}
