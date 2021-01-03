$( document ).ready(function() {
    var data = {
				    "content": { 							
								
								
								 "count": "806,210", 
								"death": "10,682" ,
								"dailycount": "15,701", 
								"dailydeath": "138" ,
								"date":"01/02" ,
								"info":"through 8:00pm 01/01/2021" ,								
								"testingaverage":"77,760" , 
								"peopletested":"4,766,878" ,
								"positivity":"18.10%" ,		
								"hospitalizations":"7,627"				
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



