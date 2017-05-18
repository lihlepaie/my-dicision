 var tableTemplate = document.querySelector('.tableTemplate').innerHTML
 var tableTemplateInst = Handlebars.compile(tableTemplate);
 var tableDisplay = document.querySelector('.tableDisplay');
 var myInput = document.getElementById('myInput').value;
 var table = document.querySelector('#t01');








var day = [{
  EachDay: ' sunday',
  breakfast: 'Egg Scrumble',
  lunch: 'out',
  dinner: 'Buffalo chicken burger'

    },

    {
      EachDay: 'monday',
      breakfast: 'Oatmeal',
      lunch: 'Steak salad',
      dinner: 'mex.chicken cassrole'

    },
      {
        EachDay: 'tuesday',
        breakfast: 'Egg Scrumble',
        lunch: 'Quiona chicken salad',
        dinner: 'crock Pot Lasagna'

    },
    {
    EachDay: 'wensday',
      breakfast: 'Protein Pancake',
      lunch: 'medeterian Quinoa',
      dinner: 'moizz & burgers'

    },

    {
      EachDay: 'thursday',
      breakfast: 'Oatmeal',
      lunch: 'Turkey Sandwitch',
      dinner: 'Salmon burgers'

    },
    {
      EachDay: 'friday',
      breakfast: 'Egg Scrumble',
      lunch: 'salad',
      dinner: 'Apple Pork Loin'

    },
    {
      EachDay: 'saturday',
      breakfast: 'French toast',
      lunch: '?',
      dinner: 'Skirt Steak'

    },

];
var results = tableTemplateInst({data: day});
document.querySelector('.tableDisplay').innerHTML += results;
var add = document.querySelector('.bttn');

document.getElementById("myBtn")

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.querySelector('.t01');
  tr = document.getElementsByTagName('tr');

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
