$('.slider').slick({
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  speed: 500, //スライドのスピード。初期値は300。
  slidesToShow: 3, //スライドを画面に3枚見せる
  slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
  centerMode: true, //要素を中央ぞろえにする
  variableWidth: true, //幅の違う画像の高さを揃えて表示
  dots: true, //下部ドットナビゲーションの表示
});
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) { //上から200pxスクロールしたら
    $('#page-top').removeClass('DownMove'); //#page-topについているDownMoveというクラス名を除く
    $('#page-top').addClass('UpMove'); //#page-topについているUpMoveというクラス名を付与
  } else {
    if ($('#page-top').hasClass('UpMove')) { //すでに#page-topにUpMoveというクラス名がついていたら
      $('#page-top').removeClass('UpMove'); //UpMoveというクラス名を除き
      $('#page-top').addClass('DownMove'); //DownMoveというクラス名を#page-topに付与
    }
  }
}
$(window).scroll(function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});
$(window).on('load', function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});
$('#page-top a').click(function () {
  $('body,html').animate({
    scrollTop: 0 //ページトップまでスクロール
  }, 500); //ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false; //リンク自体の無効化
});
$('.bottom-slider').slick({
  arrows: false, //左右の矢印はなし
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0, //自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6900, //スライドのスピード。初期値は300。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false, //オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false, //フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear', //動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 4, //スライドを画面に4枚見せる
  slidesToScroll: 1, //1回のスライドで動かす要素数
  responsive: [{
      breakpoint: 769, //モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2, //スライドを画面に2枚見せる
      }
    },
    {
      breakpoint: 426, //モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1.5, //スライドを画面に1.5枚見せる
      }
    }
  ]
});
// JavaScript Document
