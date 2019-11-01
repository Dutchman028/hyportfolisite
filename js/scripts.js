$(function() {
    var $profile=$('.profile');
    var $top=$('.top');
    var $work=$('.works');
    var $mail=$('.mail');
    var $projectImage=$('.box-list img');
    //work
    var workFlag=0;
    //work tonext
    var $nextBtn=$('.rightArrow');
    var nextSrc;
    var nextTitle;
    var nextTool;
    var thisList;
    var nextCaption;
    var imgNum;
//function area
    function top_showhide(){
        if($top.css('display')!='none'){
            $top.hide();
        }
    }
    function profile_showhide(){
        if($profile.css('display')!='none'){
            $profile.hide();
        }
    }

    function work_showhide(){
        if($work.css('display')!='none'){
            $work.hide();
        }
    }

    function mail_showhide(){
        if($mail.css('display')!='none'){
            $mail.hide();
        }
    }
//function area


//切り替え部分開始
    $('#menu-profile').click(function(){
        $('#menu-work').removeClass('work-select');
        $('#menu-mail').removeClass('mail-select');
        $(this).addClass('profile-select');
        if($top.css('display')!='none'){
            $top.fadeOut(200);
        }
       work_showhide();
       mail_showhide();
       $profile.fadeIn(1000);
    });

    $('#menu-work').click(function(){
        $('#menu-profile').removeClass('profile-select');
        $('#menu-mail').removeClass('mail-select');
        $(this).addClass('work-select');
        profile_showhide();
        top_showhide();
        mail_showhide();
        $work.fadeIn(900);
        if(workFlag!=0){
            $('.projectDetails').hide();
            $('.box-list').hide().fadeIn(900);
            workFlag=0;
        }
    });

    $('#menu-mail').click(function(){
        $('#menu-profile').removeClass('profile-select');
        $('#menu-work').removeClass('work-select');
        $(this).addClass('mail-select');
        work_showhide();
        profile_showhide();
        top_showhide();
        $mail.fadeIn(900);

    });

    $('.logo').click(function(){
        $('#menu-profile').removeClass('profile-select');
        $('#menu-work').removeClass('work-select');
        $('#menu-mail').removeClass('mail-select');
       profile_showhide();
       work_showhide();
       mail_showhide();
       $top.fadeIn(900);
    });



//切り替え部分終了

//work
//詳細ページのオンオフ
var listMax=$('.project').length;
console.log('project count  '+ listMax);

$projectImage.click(function(){
    var src = $(this).attr('src');
    var title=$(this).attr('alt');
    var tool = $(this).data('tool');
    var caption=$(this).data('caption');
    imgNum=$(this).data('number');
    console.log(imgNum);
    //次のプロジェクトの情報取得
     thisList=$(this).parent().parent();//選択した画像の先祖要素のli要素
     nextSrc=thisList.next().find('img').attr('src');
     nextTitle=thisList.next().find('img').attr('alt');
     nextTool=thisList.next().find('img').data('tool');
     nextCaption=thisList.next().find('img').data('caption');

     
    if(workFlag!=1){
        $('.box-list').hide();
        $('.projectDetails').hide().fadeIn(900);
        workFlag=1;
    }
    $('.projectDetails').find('.project-image').attr('src',src);
    $('.projectDetails').find('.project-title').text(title);
    $('.projectDetails').find('.tool').text(tool);
    $('.projectDetails').find('.caption').text(caption);
    //next button
    $('.projectDetails').find('.tonext .content').text(nextTitle);
});
//次の詳細ページへ
$nextBtn.click(function(){
    //反映
    $('.projectDetails').find('.project-image').attr('src',nextSrc);
    $('.projectDetails').find('.project-title').text(nextTitle);
    $('.projectDetails').find('.tool').text(nextTool);
    $('.projectDetails').find('.caption').text(nextCaption);
    $('.projectDetails').find('.tonext .content').text(nextTitle);

    //次のプロジェクトの情報取得
    if(imgNum<listMax-1){
    imgNum=imgNum+1;
    console.log("in"+imgNum);
    thisList=$('.img0'+imgNum).parent().parent();
    nextSrc=thisList.next().find('img').attr('src');
    nextTitle=thisList.next().find('img').attr('alt');
    nextTool=thisList.next().find('img').data('tool');
    nextCaption=thisList.next().find('img').data('caption');
    }
    else{
    //return first    
    console.log("out"+imgNum); 
    imgNum=1;
    thisList=$('.img0'+imgNum).parent().parent();
    nextSrc=thisList.find('img').attr('src');
    nextTitle=thisList.find('img').attr('alt');
    nextTool=thisList.find('img').data('tool');
    nextCaption=thisList.find('img').data('caption');
    imgNum=0;
    }

    console.log("now class " + '.img0'+imgNum);
    console.log("now title "+nextTitle);
    console.log("next title "+nextTitle);
    
    $('.projectDetails').find('.tonext .content').text(nextTitle);
    $work.hide().fadeIn(900);
});

    
  });