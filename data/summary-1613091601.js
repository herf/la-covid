$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,158,619", 

								"death": "18,658", 

								"dailycount": "3,489", 

								"dailydeath": "160", 

								"date":"02/11" ,
								"info":"through 6:00pm 02/10/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/11" ,
								"infom":"through 6:00pm 02/10/2021" ,
								
								"testingaverage":"66,177" ,
								"peopletested":"5,647,373" ,
								"positivity":"8%" ,	
								"hospitalizations":"3,772" 
									
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



