$(function () {
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


  // tab
  function visibleTabContent(dom, activeId) {
    dom.parent().find('.tab-content').addClass('hidden').removeClass('block')
    dom.parent().find('[infoid=' + activeId + ']').removeClass('hidden').addClass('block')
  }

  $('.tab-line').each(function(index, el) {
    var activeId = $(el).attr('active');
    $(el).parent().find('.tab-item').removeClass('tab-active');

    var activeDom = $(el).parent().find('[tabid=' + activeId + ']');
    activeDom.addClass('tab-active');
    var left = activeDom[0].getBoundingClientRect().left;
    var width = activeDom[0].getBoundingClientRect().width;
    var parentLeft = activeDom.parent()[0].getBoundingClientRect().left;

    var lineWidth = el.getBoundingClientRect().width
    $(el).css('transform', 'translateX('+ (left - parentLeft + width / 2 - lineWidth / 2) +'px)');
  
    visibleTabContent($(el).parent(), activeId)
  })
  $('.tab').find('.tab-item').click(function(event) {
    var tabId = $(this).attr('tabid');
    $(this).parent().find('.tab-item').removeClass('tab-active');
    $(this).addClass('tab-active')
    var tabLine = $(this).parent().find('.tab-line')
    tabLine.attr('active', tabId)

    var left = this.getBoundingClientRect().left;
    var width = this.getBoundingClientRect().width;
    var parentLeft = $(this).parent()[0].getBoundingClientRect().left; 
    var lineWidth = tabLine[0].getBoundingClientRect().width

    tabLine.css('transform', 'translateX('+ (left - parentLeft + width / 2 - lineWidth / 2) +'px)');
    
    visibleTabContent($(this).parent(), tabId)
  })

  $('.part-two-tab').find('.tab-item').click(function(event) {
    var tabId = $(this).attr('tabid');

    $('.part-two-img-wrap').find('div').removeClass('block').addClass('hidden')
    $('.part-two-img-wrap').find('[imgid='+ tabId +']').addClass('block').removeClass('hidden')
  })

  // menu
  $('.lanying-menu').find('.lanying-submenu-title').click(function() {
    var support = $(this).attr('support') || 'mobile' // mobile & pc & all
    if (($(document).width() <= 750 && support === 'mobile') || ($(document).width() >= 750 && support === 'pc') || support === 'all') {
      var isActive = $(this).hasClass('active')
      $(this).toggleClass('active')
      var box = $(this).parent().find('.lanying-submenu-box')
      if (isActive) {
        box.css('height', '0px')
      } else {
        var children = box.children()
        var height = 0
        children.each(function(index, el) {
          height += $(el).height()
        })
        box.css('height', height + 'px')
      }
    }
  })

  // drop-down
  $('.drop-down').mouseover(function() {
    var box = $(this).find('.drop-down-box')
    var height = 0
    box.children().each(function(index, el) {
      console.log('height', $(el).height())
      height += $(el).height()
    })
    
    box.css({'height': height + 'px', 'opacity': 1})
  }).mouseleave(function() {
    var box = $(this).find('.drop-down-box')
    box.css({'height': 0, 'opacity': 0})
  })

  // 动态设置根节点font-size rem变化
  function setHtmlSize(){
    var ratio = 16 / 1440
    var fontSize = ratio * $(window).width()
    $(document.documentElement).css('font-size', fontSize + 'px')
  }
  setHtmlSize()
  $(window).resize(function(e) {
    setHtmlSize()
  })
})


