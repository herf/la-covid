$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "408,396",
								"death": "7,700" ,
								"dailycount": "7,593", 
								"dailydeath": "46" ,
								"date":"12/01" ,
								"info":"through 8:00pm 11/30/2020" ,
								
								"testingaverage":"76,104" , 
								"peopletested":"3,760,102" , 
								"positivity":"7%" , 
								"hospitalizations":"2,316"	

								
								
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



