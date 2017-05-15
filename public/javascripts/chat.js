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
