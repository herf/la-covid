$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "932,697", 
								"death": "12,387" ,
								"dailycount": "12,617", 
								"dailydeath": "137" ,
								"date":"01/11" ,
								"info":"through 6:00pm 01/10/2021" ,
								
								"testingaverage":"79,526" , 
								"peopletested":"5,018,807" ,
								"positivity":"20.50%" ,		
								"hospitalizations":"7,910"		
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



