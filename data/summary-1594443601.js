$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "127,358",
				            "death": "3,738" ,
				            "dailycount": "2,667",
				            "dailydeath": "51" ,
				            "date":"07/10" ,
				            "info":"through 8:00pm 07/09/2020" ,
				            
							"testingaverage":"16,423" ,
							"peopletested":"1,268,875" ,
							"positivity":"9.90%" ,
							"hospitalizations":"1,995" ,                    
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



