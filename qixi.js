window.onload=function() {
    var myname = document.getElementsByClassName('myname');
    var myimg = document.getElementsByClassName('myimg');
    var li = document.getElementsByClassName('li');
    var myphoto=document.getElementsByClassName('myphoto');
    
    for (var i = 0; i < li.length; i++) {
        list(i, li[i]);
        images(i,myphoto[i]);    
    }
    function list(a,b) {
        b.onclick = function () {
            for(m in myname){
                myname[m].innerText=this.innerText;
            }
           
        }
    }

    function images(c,d) {
        d.onclick = function () {
            for(n in myimg){
                myimg[n].src=this.src;
            }  
        }
    }

    $(function(){
        $('.left').hide();
        $('.right').hide();
        $('.left1').delay(2000).fadeIn(2000);
        $('.left2').delay(6000).fadeIn(2000);
        $('.left3').delay(10000).fadeIn(2000);

       
        $('.right1').delay(4000).fadeIn(2000);
        $('.right2').delay(8000).fadeIn(2000);
        $('.right3').delay(12000).fadeIn(2000);
    })
        

}
