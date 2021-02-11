$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,155,309", 

								"death": "18,500", 

								"dailycount": "3,434", 

								"dailydeath": "141", 

								"date":"02/10" ,
								"info":"through 6:00pm 02/09/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/10" ,
								"infom":"through 6:00pm 02/09/2021" ,
								
								"testingaverage":"66,778" ,
								"peopletested":"5,634,027" ,
								"positivity":"8.40%" ,	
								"hospitalizations":"3,973" 
									
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



