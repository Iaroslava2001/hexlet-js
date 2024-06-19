// По общепринятому соглашению, lodash импортируется под именем _
import _ from 'lodash';

// Пересечение массивов
const intersectedArray = _.intersection([2, 1], [2, 3]);
console.log('Intersection:', intersectedArray); // => [2]

// capitalize делает первую букву заглавной
const capitalizedString = _.capitalize('hello');
console.log('Capitalized:', capitalizedString); // => Hello
console.log(_.last(['one', 'two']));
