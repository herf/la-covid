$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,169,550", 

								"death": "19,215", 

								"dailycount": "1,260", 

								"dailydeath": "120", 

								"date":"02/16" ,
								"info":"through 6:00pm 02/15/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/16" ,
								"infom":"through 6:00pm 02/15/2021" ,
								
								"testingaverage":"63,395" ,
								"peopletested":"5,707,383" ,
								"positivity":"6.40%" ,	
								"hospitalizations":"2,964" 
									
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



