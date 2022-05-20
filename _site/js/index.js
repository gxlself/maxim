$(function () {


  /** marquee of home...  */
  // const w = $(document).width();
  // const mqCount = $('.marquee .mq_content').length;
  // $('.marquee .mq_content').width(w);
  // $('.marquee .mqfrm').width(w * mqCount);
  // setInterval(function () {
  //   $('.mqfrm').animate({ left: 0 - w + 'px' }, 'slow', function () {
  //     $('.mqfrm').append($('.mqfrm .mq_content').first());
  //     $('.mqfrm').css('left', '0')
  //   })
  // }, 5000)

{% t auto.key_3809_616771869  %} {% comment %}  // 设置 tabs + click{% endcomment %}
  var ww = document.documentElement.clientWidth;
  $('.tabContent').width(ww * 6 + 'px');
  $('.tabContent .frm').width(ww + 'px');


  $('.tabs span').click(function () {
    $('.tabs span').removeClass('sel');
    $(this).addClass('sel');
    const idx = $(this).attr('i');
    // $('.stabc').scrollLeft(idx * ww);
    $('.stabc').animate({ 'scrollLeft': idx * ww + 'px' })
  });

  const mqarr1 = [{% t auto.key_3810_103856848  %} {% comment %}'一键开通 即时通讯 公有云'{% endcomment %},
    {% t auto.key_3811_925835939  %} {% comment %}'美信拓扑已开源代码 163277 行'{% endcomment %},
    '{% t auto.key_49_270723883  %} {% comment %}一键安装 即时通讯 私有云{% endcomment %}',
    {% t auto.key_3812_474569449  %} {% comment %}'一键部署 即时通讯 专有云'{% endcomment %},
    {% t auto.key_3813_601251060  %} {% comment %}'唯一上架阿里云云市场的 即时通讯 私有云'{% endcomment %},
    '{% t auto.key_176_780381875  %} {% comment %}新一代 云原生 IM{% endcomment %}'
  ];
  const mqarr2 = ['{% t auto.key_128_494289343  %} {% comment %}快速集成，全球通连，每天仅需25元{% endcomment %}',
    {% t auto.key_3814_021615143  %} {% comment %}'美信拓扑开源（MTOS）2021.08.12'{% endcomment %},
    '{% t auto.key_50_292459892  %} {% comment %}自主可控，方便定制，10分钟安装，按月付费 🔥{% endcomment %}',
    '{% t auto.key_104_771763997  %} {% comment %}专业服务，运维无忧，随心切换底层云服务{% endcomment %}',
    {% t auto.key_3815_061159536  %} {% comment %}'直接购买阿里云云主机，选择美信拓扑镜像'{% endcomment %},
    '{% t auto.key_3817_228909701  %} {% comment %}一键启用多云架构的即时通讯云服务{% endcomment %}'
  ];

  let sa = 0;
  const timerFun = () => {
    sa++;
    sa = sa % 5;
    $('#sa1').animate({
      opacity: 0,
    }, 'fast', function () {
      $(this).html(mqarr1[sa]);
      $(this).animate({ opacity: 1 });
    })

    $('#sa2').animate({
      opacity: 0,
    }, 'fast', function () {
      $(this).html(mqarr2[sa]);
      $(this).animate({ opacity: 1 });
    })
  }

  !window.sintv && (window.sintv = setInterval(timerFun, 5000));

  var hiddenProperty = 'hidden' in document ? 'hidden' :
    'webkitHidden' in document ? 'webkitHidden' :
      'mozHidden' in document ? 'mozHidden' :
        null;

  function onVisibilityChanged (event) {
    if (!document[hiddenProperty]) {
      /** will show */
      !window.sintv && (window.sintv = setInterval(timerFun, 5000));
    } else {
      /**** will hide */
      clearInterval(window.sintv);
      window.sintv = 0;
    }
  }
  document.addEventListener("visibilitychange", onVisibilityChanged, false);



})


