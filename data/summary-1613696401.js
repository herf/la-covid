$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,174,340", 

								"death": "19,514", 

								"dailycount": "2,873", 

								"dailydeath": "153", 

								"date":"02/18" ,
								"info":"through 6:00pm 02/17/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/18" ,
								"infom":"through 6:00pm 02/17/2021" ,
								
								"testingaverage":"60,373" ,
								"peopletested":"5,728,763" ,
								"positivity":"5.70%" ,	
								"hospitalizations":"2,757" 
									
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



