$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,191,923", 


								"death": "21,435", 


								"dailycount": "1,064", 


								"dailydeath": "107", 

								"date":"02/28" ,
								"info":"through 6:00pm 02/27/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/26" ,
								"infom":"through 6:00pm 02/25/2021" ,
								
								"testingaverage":"50,826" , 
								"peopletested":"5,830,725" , 
								"positivity":"3.50%" ,	
								"hospitalizations":"1,661" 
									
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



