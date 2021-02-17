$(document).ready(() => {
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    
    $(".pro").on('click', function(){
        $('.carousel-item').remove();
        imgs = $(this).attr('data-img').split(',');
        for(i=0; i<imgs.length; i++){
            if(i ==0){
            $('#modal-caro-inner').append(`<div class="carousel-item active"><img src="img/${ imgs[i] }" alt="img" class="img-fluid"></div>`)
                
            }
            else{
                $('#modal-caro-inner').append(`<div class="carousel-item"><img src="img/${ imgs[i] }" alt="img" class="img-fluid"></div>`);
            }
        }
        $('#modal-p-title').text($(this).attr('data-title'));
        $('#modal-p-front-end').text($(this).attr('data-frontend'));
        $('#modal-p-back-end').text($(this).attr('data-backend'));
        $('#modal-p-discription').text($(this).attr('data-info'));
        $('#modal-p-database').text($(this).attr('data-database'));
        if($(this).attr('data-link') == "#"){
            $('#modal-p-btn').addClass('d-none')
        }
        else{
            $('#modal-p-btn').removeClass('d-none')
            $('#modal-p-btn').attr('href',$(this).attr('data-link'));
        } 
    });
    function text_chage(){
        var $text = $('.my_post');
        var data = ['Data Scientist','ML Engineer','Freelancer'];
        
        function addTextCharacter(i){
            return new Promise(function(resolve, reject){
                $.each(data[i].split(''), function(j, letter){
                    setTimeout(function(){
                        $text.html($text.html() + letter)
                    }, 50*j);
                });
                setTimeout(resolve,data[i].length*50 + 2000);
            });
            
        }
        function removeTextCharacter(i){
            return new Promise(function(resolve, reject){
                len = data[i].length;
                for(k=0; k < data[i].length ; k++){
                    setTimeout(function(){
                        len = len - 1;
                        $text.html(data[i].substring(0, len))
                    }, k*50);
                }
                setTimeout(resolve,data[i].length*50 + 1000)
            });
            
        }
        async function text_sequence(i){
            await addTextCharacter(i);
            await removeTextCharacter(i);
            i = i + 1;
            text_sequence(i < data.length ? i :0);
        }
        text_sequence(0);    
    }
    text_chage();
});
