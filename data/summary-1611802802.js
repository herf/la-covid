$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,091,712", 

								"death": "15,897", 

								"dailycount": "6,917", 

								"dailydeath": "307", 

								"date":"01/27" ,
								"info":"through 6:00pm 01/26/2021" ,
								
								//update M-F only with same info as above,
								"datem":"01/27" ,
								"infom":"through 6:00pm 01/26/2021" ,
								
								"testingaverage":"84,569" ,
								"peopletested":"5,427,595" ,
								"positivity":"12.80%" ,		
								"hospitalizations":"6,213"									
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



