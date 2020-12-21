$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								"count": "623,670", 

								"death": "8,875" ,
								"dailycount": "13,315", 
								"dailydeath": "58" ,
								"date":"12/20" ,
								"info":"through 8:00pm 12/19/2020" ,
								
								"testingaverage":"92,561" ,
								"peopletested":"4,371,632" ,
								"positivity":"14.80%" , 
								"hospitalizations":"5,549" 						
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



