document.addEventListener('DOMContentLoaded', function() {

  var cats = document.querySelectorAll('.cat-box');
  var button = document.querySelector('.summon-cats');

  button.addEventListener('click', function(e) {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(response) {
      var catList = response.cats
      console.log(catList)
        for (var index = 0; index < cats.length; index++) {
          var imgTag = document.createElement('img');
          var catImgDiv = document.createElement('div');
          imgTag.src = catList[index].photo
          catImgDiv.append(imgTag);
          cats[index].innerHTML = catImgDiv.innerHTML
        };

    });

  });
  // cats.forEach(function(cat) {
  //   cat.addEventListener('click')
  // })

});
