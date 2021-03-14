$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,210,265", 
								"death": "22,474", 
								"dailycount": "644", 
								"dailydeath": "28", 
								
								"date":"03/14" ,
								"info":"through 6:00pm 03/13/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/12" ,
								"infom":"through 6:00pm 03/11/2021" ,
								
								"testingaverage":"46,308" , 
								"peopletested":"5,955,271" ,
								"positivity":"2%" ,	
								"hospitalizations":"951" 									
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



