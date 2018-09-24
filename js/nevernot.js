$(document).ready(function() {

$('.product_listing').each(function() {
  if ($(this).data('quantity') <= 20) {
    $(this).addClass('inventory_low');
  }
});


$('input').change(function() {
  var selectedButton = $('input[name=category_filter]:checked').val();
  $('.product_listing').each(function() {
    if ($(this).data('category') == $('input[name=category_filter]:checked').val()) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  })
  if ($('input[name=category_filter]:checked').val() == 'all') {
    $('.product_listing').show();
  }
})
});
