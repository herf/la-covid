$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "274,565",
				            "death": "6,647" ,
				            "dailycount": "933",
				            "dailydeath": "5" ,
				            "date":"10/04" ,
				            "info":"through 8:00pm 10/03/2020" ,
				            
							"testingaverage":"12,687" ,
							"peopletested":"2,719,069" ,
							"positivity":"3.1%" ,
							"hospitalizations":"673" 							
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



