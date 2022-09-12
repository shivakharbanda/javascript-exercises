const getTheTitles = function() {
    arr = arguments[0];
    titles = []
    arr.forEach(element => {
        titles.push(element.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

console.log(getTheTitles( [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]));