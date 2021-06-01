function addingInList(value){
  var textNode = document.createTextNode(value);

  var len = $('#list').children().length;
  for (var i = 0; i < len; i++) {
    if($('#list').children()[i].childNodes[0].innerText.replace(/[^a-z]/gi, "")  === value){
      var x = $('#list').children()[i].childNodes[0].children[1];
      var newQuantity = parseInt(x.innerText) + 1;
      x.innerText  = newQuantity;
      return ;
    }
  }
  var quantity = document.createTextNode('1');

  var li = document.createElement('li');

  var div_parent = document.createElement('div');

  div_parent.className= "row";

  var div_child_1 = document.createElement('div');

  div_child_1.className = "col";

  var div_child_2 = document.createElement('div');

  div_child_2.className = "col";

   var child_1 = $(div_child_1).append(textNode);
  var child_2 = $(div_child_2).append(quantity);
  $(div_parent).append(child_1);
  $(div_parent).append(child_2);
  $(li).append(div_parent);
  $('#list').append(li);
}
