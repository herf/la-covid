$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,181,403", 

								"death": "19,904", 

								"dailycount": "943", 

								"dailydeath": "21", 

								"date":"02/22" ,
								"info":"through 6:00pm 02/21/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/22" ,
								"infom":"through 6:00pm 02/21/2021" ,
								
								"testingaverage":"50,209" ,
								"peopletested":"5,770,814" ,
								"positivity":"5%" ,	
								"hospitalizations":"2,213" 
									
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
				
				$('#dte_m').html(content.datem);
				$('#cse_m').html(content.infom);
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



