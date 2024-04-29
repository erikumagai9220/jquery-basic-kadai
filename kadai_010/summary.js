$(function() {
  //文字色が変わる
 $('#change-color').on('click',function() {
   $('#target').css('color','orange');
 });
   //文字内容が変わる
 $('#change-text').on('click',function() {
   $('#target').text('thank you!');
 });
   //フェードアウトで文字が消える
 $('#fade-out').on('click',function() {
  $('#target').fadeOut();
 });
   //フェードインで文字が現れる
 $('#fade-in').on('click',function() {
  $('#target').fadeIn();
 });
});