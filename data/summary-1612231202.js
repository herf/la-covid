$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,120,895", 

								"death": "16,854", 

								"dailycount": "4,223", 

								"dailydeath": "85", 

								"date":"02/01" ,
								"info":"through 6:00pm 01/31/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/01" ,
								"infom":"through 6:00pm 01/31/2021" ,
								
								"testingaverage":"82,578" ,
								"peopletested":"5,518,360" ,
								"positivity":"11.30%" ,		
								"hospitalizations":"5,398"									
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



