$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "211,808" ,
				            "death": "5,057" ,
				            "dailycount": "1,440" ,
				            "dailydeath": "63" ,
				            "date":"08/11" ,
				            "info":"through 8:00pm 08/10/2020" ,
				            
							"testingaverage":"18,635" ,
							"peopletested":"1,965,453" ,
							"positivity":"6.5%" ,
							"hospitalizations":"1,524" ,                    
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



