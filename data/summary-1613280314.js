$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,164,769", 

								"death": "18,984", 

								"dailycount": "3,254", 

								"dailydeath": "197", 

								"date":"02/13" ,
								"info":"through 6:00pm 02/12/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/12" ,
								"infom":"through 6:00pm 02/11/2021" ,
								
								"testingaverage":"66,381" ,
								"peopletested":"5,679,535" ,
								"positivity":"7.30%" ,	
								"hospitalizations":"3,426" 
									
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



