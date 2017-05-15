var socket=io.connect('/');
socket.on("message",function(data)
{
  data=JSON.parse(data);
  $('#head_message').append('<h5>'+data.message+'</h5>');
});
$(function(){
$('#send').click(function(){
var data = {
message: $('#input_message').val(),
type:'userMessage'
};
socket.send(JSON.stringify(data));
$('#message').val();
});
});

$(function(){
$('#setname').click(function(){
socket.emit("set_name", {name: $('#input_nick').val()});
});
});
$(function()
{



      $('#myModal').modal('show');


});
