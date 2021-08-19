$(function () {
  $('button:eq(0)').click(function () {
    $('.box').children().text('ABCDEF');
  });

  $('button:eq(1)').click(function () {
    $('.box > .bgSpan:eq(2)').css('background-color', 'skyblue');
  });

  $('button:eq(2)').click(function () {
    $('#allChk > input').each(function () {
      $(this).prop('checked', false);
    });
  });

  $('button:eq(3)').click(function () {
    $('select > option').eq(1).prop('selected', 'true');
  });

  $('button:eq(4)').click(function () {
    $('select > option:nth-child(even)').css('background-color', 'yellow');
  });

  $('button:eq(5)').click(function () {
    if ($('#isChild > div').children().length > 0) {
      $('#isChild > div').children().parent().remove();
    }
  });

  $('button:eq(6)').click(function () {
    var ele = $('tr:eq(0)').detach();
    $('table').append(ele);
  });

  $('button:eq(7)').click(function () {
    if ($('#cellTable').find('td').text() > 10) {
      $('#cellTable').children('td').css('background-color', 'yellow');
    }
  });

  $('button:eq(8)').click(function () {
    $('.box > span').each(function (i) {
      if ($('.box > span').eq(i).text() == 'bold') {
        $(this).css('font-weight', 'bold');
      }
    });
  });

  $('button:eq(9)').click(function () {
    $('#lastQuestion').css('color', 'red');
    $('#lastQuestion').attr('readonly', true);
  });
});
