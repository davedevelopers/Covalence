let friends = ['Shanjan', 'Dhananjay', 'Pradhumn', 'Neha', 'Manisha'];

for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]+':');
    for (var j = 99; j >= 1; j--) {
        let sentence=j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file\n';
        console.log(sentence);
    }
}