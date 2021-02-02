$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,124,558", 

								"death": "17,057", 

								"dailycount": "3,763", 

								"dailydeath": "205", 

								"date":"02/02" ,
								"info":"through 6:00pm 02/01/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/02" ,
								"infom":"through 6:00pm 02/01/2021" ,
								
								"testingaverage":"78,319" ,
								"peopletested":"5,526,833" ,
								"positivity":"11.10%" ,		
								"hospitalizations":"5,259"									
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



