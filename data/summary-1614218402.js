$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,185,457", 

								"death": "20,987", 

								"dailycount": "2,157", 

								"dailydeath": "136", 

								"date":"02/24" ,
								"info":"through 6:00pm 02/23/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/24" ,
								"infom":"through 6:00pm 02/23/2021" ,
								
								"testingaverage":"50,931" ,
								"peopletested":"5,788,817" ,
								"positivity":"4.40%" ,	
								"hospitalizations":"2,064" 
									
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



