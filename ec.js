function addComments(id){

  //Gets comment content and adds it right below title as most recent comment
  var comment = document.getElementById(id+"Com").value;
  var table = document.getElementById(id+"T");
  var newRow = table.insertRow(1);
  var newCell = newRow.insertCell(0);
  var x = table.rows.length;
  var com = "User Comment: "
  newCell.innerHTML = com.bold() +comment;
  document.getElementById(id+"Com").value = "";

}
var count = 1;
function newDiscussion() {
  var post = document.getElementById("postContent").value
  if(post.replace(/\s/g,'')==''){
    document.getElementById("postContent").value = "";
    alert("Field is empty");
  }
  else{
  //creates table with specific style
  var div = document.getElementById("forum")
  var x = document.createElement("TABLE");
  x.style.width = '65%';
  x.setAttribute('border', '1');
  x.setAttribute("id", count+"T");
  var space = document.createElement("br");
  //places new discussion in forum div and inserts vertical space
  div.appendChild(x);
  div.appendChild(space);
  div.appendChild(space);

  //creates first row as title
  var newRow = x.insertRow(0);
  var newCell = newRow.insertCell(0);
  var title = "Post: "
  newCell.innerHTML= title.bold() +post;


  //Creates row below title for comments
  var commentSection = x.insertRow(1);
  commentCell = commentSection.insertCell(0);
  var area = document.createElement("TEXTAREA");
  area.setAttribute("id", count+"Com");
  area.style.width = '100%';
  area.style.height = '200px'
  commentCell.appendChild(area);
  area.setAttribute("placeholder", "Comment here");

  //Makes button that calls addComments function
  var buttonRow = x.insertRow(2);
  var buttonCell = buttonRow.insertCell(0)
  var button = document.createElement('input');
  button.setAttribute('type', 'submit');
  button.setAttribute('value', 'Add comment');
  button.setAttribute('id', count);
  button.setAttribute('onclick', "addComments(this.id)");
  buttonCell.appendChild(button);
  document.getElementById("postContent").value = "";

  //Keeps track of discussion ids
  count+=1;
}
}
