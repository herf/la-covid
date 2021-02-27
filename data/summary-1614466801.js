$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,190,894", 

								"death": "21,328", 

								"dailycount": "1,730", 

								"dailydeath": "94", 

								"date":"02/26" ,
								"info":"through 6:00pm 02/25/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/26" ,
								"infom":"through 6:00pm 02/25/2021" ,
								
								"testingaverage":"50,536" ,
								"peopletested":"5,820,973" ,
								"positivity":"3.60%" ,	
								"hospitalizations":"1,733" 
									
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



