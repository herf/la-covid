$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,138,764", 

								"death": "17,764", 

								"dailycount": "4,761", 

								"dailydeath": "226", 

								"date":"02/05" ,
								"info":"through 6:00pm 02/04/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/05" ,
								"infom":"through 6:00pm 02/04/2021" ,
								
								"testingaverage":"70,067" ,
								"peopletested":"5,573,178" ,
								"positivity":"9.90%" ,	
								"hospitalizations":"4,796"									
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



