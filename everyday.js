 var tableTemplate = document.querySelector('.tableTemplate').innerHTML
 var tableTemplateInst = Handlebars.compile(tableTemplate);
 var tableDisplay = document.querySelector('.tableDisplay');
 var myInput = document.getElementById('myInput').value;
 var table = document.querySelector('#t01');
 var myBtn = document.getElementById('myBtn');








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

    }

];

var results = tableTemplateInst({day: day});
document.querySelector('.tableDisplay').innerHTML = results;

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

myBtn.addEventListener('click',function(){
        var EachDay = e.value
        var Breakfast =b.value;
        var Lunch = l.value;
        var Dinner= d.value;


for (var i = 0; i < day.length; i++) {
if(day[i].EachDay == document.querySelector('#e').value) {
        return;
  }
    }


for (var i = 0; i < day.length; i++) {
  if(day[i].breakfast == document.querySelector('#b').value) {
        return;
      }
}
for (var i = 0; i < day.length; i++) {
  if (day [i].lunch == document.querySelector('#l').value) {
       return;
  }
}
for (var i = 0; i < day.length; i++) {
  if (day [i].dinner == document.querySelector('#d').value) {
       return;
  }
}

day.push({
  EachDay:document.querySelector('#e').value,
  breakfast:document.querySelector('#b').value,
  lunch:document.querySelector('#l').value,
  dinner:document.querySelector('#d').value
  })
  var results = tableTemplateInst({day: day});
  document.querySelector('.tableDisplay').innerHTML = results;
   });
