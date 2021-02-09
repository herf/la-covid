$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,149,064", 

								"death": "18,135", 

								"dailycount": "2,741", 

								"dailydeath": "93", 

								"date":"02/08" ,
								"info":"through 6:00pm 02/07/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/08" ,
								"infom":"through 6:00pm 02/07/2021" ,
								
								"testingaverage":"69,081" ,
								"peopletested":"5,612,676" ,
								"positivity":"9.20%" ,	
								"hospitalizations":"4,186" 
									
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



