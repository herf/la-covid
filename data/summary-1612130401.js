$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,116,892", 

								"death": "16,770", 

								"dailycount": "5,925", 

								"dailydeath": "124", 

								"date":"01/31" ,
								"info":"through 6:00pm 01/30/2021" ,
								
								//update M-F only with same info as above,
								"datem":"01/29" ,
								"infom":"through 6:00pm 01/28/2021" ,
								
								"testingaverage":"79,441" ,
								"peopletested":"5,501,959" ,
								"positivity":"11.60%" ,		
								"hospitalizations":"5,321"									
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



