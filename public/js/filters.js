/*jshint esversion: 6 */

app.filter('capitalize', function() {
  return function(input, scope) {
    if (input != null){
      input = input.toLowerCase().split(' ');

      for (var i = 0; i < input.length; i++) {
         input[i] = input[i].charAt(0).toUpperCase() + input[i].substring(1);
      }
      return input.join(' ');
    }
  };
});
app.filter('companySize', function () {
  return function(input) {
    return input.split(/(?=[A-Z])/).join(' ');
  };
});
app.filter('renderTechnologies', function() {
  return function(input) {
    if (typeof(input) === 'object') {
      var skills = '';

      for (var key in input.oneof) {
        skills = skills + `${key}: ${input.oneof[key]}; `;
      }
      skills = skills.substring(0, skills.length - 2);
      return 'one of: ' + skills;
    } else {
      return input;
    }
  };
});
app.filter('renderLists', function() {
  return function(input) {
      if (input) {
        return input;
      }
  };
});
app.filter('renderListValue', function() {
  return function(input) {
      if (typeof(input) === 'boolean') {
        return;
      } else if (typeof(input) === 'object' && !Array.isArray(input)){
        return `: ${input.from} to ${input.to}`
      } else if (Array.isArray(input)) {
        var list = '';
        for (var i = 0; i < input.length; i++) {
          if (i === input.length - 1) {
            list = list.substring(0, list.length-2) + ' and ' + input[i];
          } else {
            list = list + input[i] + ', ';
          }
        }
        return `: ${list}`;
      } else if (typeof(input) === 'string') {
        return `: ${input.split(/(?=[A-Z])/).join(' ')}`
      } else {
        return `: ${input}`;
      }
  };
});
app.filter('showAsList', function() {
  return function(input) {
    var list = '';
    for (var i = 0; i < input.length; i++) {
      if (i === 0) {
        list = list + input[i].charAt(0).toUpperCase() + input[i].substring(1);
      } else if (i === input.length - 1) {
        list = list + ', and ' + input[i];
      } else {
        list = list + ', ' + input[i];
      }
    }
    return list;
  };
});
