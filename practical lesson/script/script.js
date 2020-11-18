function cycle(item, length) {
    if (item < length) {
        item++;
        cycle(item, length);
    } else console.log(item);
}
cycle(1, 5);