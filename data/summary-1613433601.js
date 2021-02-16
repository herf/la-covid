$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,168,358", 

								"death": "19,095", 

								"dailycount": "1,869", 

								"dailydeath": "29", 

								"date":"02/15" ,
								"info":"through 6:00pm 02/14/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/12" ,
								"infom":"through 6:00pm 02/11/2021" ,
								
								"testingaverage":"64,763" ,
								"peopletested":"5,701,925" ,
								"positivity":"6.70%" ,	
								"hospitalizations":"3,092" 
									
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



