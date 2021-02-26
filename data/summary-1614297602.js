$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,187,474", 

								"death": "21,102", 

								"dailycount": "2,072", 

								"dailydeath": "132", 

								"date":"02/25" ,
								"info":"through 6:00pm 02/24/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/25" ,
								"infom":"through 6:00pm 02/24/2021" ,
								
								"testingaverage":"50,675" ,
								"peopletested":"5,801,324" ,
								"positivity":"4.10%" ,	
								"hospitalizations":"1,988" 
									
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



