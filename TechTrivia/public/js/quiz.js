$(function(){
    let nroPregunta = 0;
    let quiz = getQuiz();
    let pregunta = quiz.results[nroPregunta].question;
    let correcta = quiz.results[nroPregunta].correct_answer;
    let respuestas = [...quiz.results[nroPregunta].incorrect_answers,quiz.results[nroPregunta].correct_answer];
    
    const desordenarRespuestas = (arrayRespuestas) =>{
        let n = [];
        let respuestasDesordenadas = arrayRespuestas.map((val,i) =>{
       
            while (n.length<=i) {
                let randomNumer = Math.floor(Math.random() * 4);
                console.log(randomNumer);
                if (n.indexOf(randomNumer)===-1) {
                    n.push(randomNumer);
                    return arrayRespuestas[randomNumer];
                }
            }
            
        })

        return respuestasDesordenadas;
       
    }

    let respuestasDesordenadas = desordenarRespuestas(respuestas);
    let labelResp =``;
    respuestas.forEach((val,i)=>{
        labelResp+=`<label class="element-animation1 btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="1">${val}</label>`;
    });

    $('#quiz').append(labelResp);
    $('#question').append(pregunta);
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });
    
    $("label.btn").on('click',function () {
    	var choice = $(this).find('input:radio').val();
    	$('#loadbar').show();
    	$('#quiz').fadeOut();
    	setTimeout(function(){
           $( "#answer" ).html(  $(this).checking(choice) );      
            $('#quiz').show();
            $('#loadbar').fadeOut();
    	}, 1500);
    });

    $ans = 3;

    $.fn.checking = function(ck) {
        if (ck != $ans)
            return 'INCORRECT';
        else 
            return 'CORRECT';
    }; 
});