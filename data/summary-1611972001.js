$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,104,393", 

								"death": "16,332", 

								"dailycount": "7,112", 

								"dailydeath": "228", 

								"date":"01/29" ,
								"info":"through 6:00pm 01/28/2021" ,
								
								//update M-F only with same info as above,
								"datem":"01/29" ,
								"infom":"through 6:00pm 01/28/2021" ,
								
								"testingaverage":"81,255" ,
								"peopletested":"5,463,142" ,
								"positivity":"12%" ,		
								"hospitalizations":"5,855"									
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



