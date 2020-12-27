$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								"count": "706,448", 

								"death": "9,438" ,
								"dailycount": "29,464", 
								"dailydeath": "142" ,
								"date":"12/26" ,
								"info":"through 8:00pm 12/25/2020" ,
								
								"testingaverage":"100,906" ,
								"peopletested":"4,573,160" ,
								"positivity":"16.90%" , 
								"hospitalizations":"6,770" 						
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



