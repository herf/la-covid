$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,073,111", 

								"death": "15,260", 

								"dailycount": "8,243", 

								"dailydeath": "98", 

								"date":"01/24" ,
								"info":"through 6:00pm 01/23/2021" ,
								
								//update M-F only with same info as above,
								"datem":"01/22" ,
								"infom":"through 6:00pm 01/21/2021" ,
								
								"testingaverage":"92,944" ,
								"peopletested":"5,377,758" ,
								"positivity":"14%" ,		
								"hospitalizations":"6,697"									
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



