$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "214,197" ,
				            "death": "5,109" ,
				            "dailycount": "2,428" ,
				            "dailydeath": "58" ,
				            "date":"08/12" ,
				            "info":"through 8:00pm 08/11/2020" ,
				            
							"testingaverage":"18,329" ,
							"peopletested":"1,984,394" ,
							"positivity":"7.2%" ,
							"hospitalizations":"1,538" ,                    
				        }       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);			


});



