$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,134,338", 

								"death": "17,539", 

								"dailycount": "5,028", 

								"dailydeath": "239", 

								"date":"02/04" ,
								"info":"through 6:00pm 02/03/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/04" ,
								"infom":"through 6:00pm 02/03/2021" ,
								
								"testingaverage":"73,055" ,
								"peopletested":"5,558,907" ,
								"positivity":"10.40%" ,	
								"hospitalizations":"4,990"									
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



