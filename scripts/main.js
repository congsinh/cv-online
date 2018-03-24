// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
function myMap() {
    var myCenter = new google.maps.LatLng(15.885966, 108.303218);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 15};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
    google.maps.event.addListener(marker,'click',function() {
        var infowindow = new google.maps.InfoWindow({
            content:"Xưởng mộc Công Lang, Cụm CN phường Thanh Hà"
        });
        infowindow.open(map,marker);
    });
}
$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library

});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});


    $('#sendmail').validate({
            rules:{
                name:{
                    required: true,
                },
                subject:{
                    required: true,
                },
                email:{
                    required: true,
                    email:true
                },
                message:{
                    required: true,
                }
            },
            messages:{
                name:{
                    required: "Xin vui lòng nhập tên !"
                },
                subject:{
                    required: "Xin vui lòng nhập tiêu đề !"
                },
                email:{
                    required: "Xin vui lòng nhập email !",
                    email: "Email chưa đúng định dạng !"
                },
                message:{
                    required: "Xin vui lòng nhập lời nhắn !"
                }
            },
            submitHandler: function (form){
                    var txtname = $('#name').val();
                    var txtsubject = $('#subject').val();
                    var txtemail = $('#email').val();
                    var txtmsg = $('#message').val();
                    $.ajax({
                        url: 'index.php',
                        type: 'post',
                        data: {
                            action: 'sendmail',
                            name: txtname,
                            subject: txtsubject,
                            email: txtemail,
                            message: txtmsg
                        },
                        success: function (data) {
                            $('#result').html(data);
                            $("#notice").delay(4000).slideUp();

                        }
                });
                return false;// không submit form
            }
        }
    );



// function([string1, string2],target id,[color1,color2])
consoleText(['Phạm Công Sinh','Designer', 'Web Developer'], 'text',['white']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function() {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}
