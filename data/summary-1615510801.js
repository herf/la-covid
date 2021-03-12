$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,208,024", 
								"death": "22,304", 
								"dailycount": "1,378", 
								"dailydeath": "101", 
								
								"date":"03/11" ,
								"info":"through 6:00pm 03/10/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/11" ,
								"infom":"through 6:00pm 03/10/2021" ,
								
								"testingaverage":"47,177" , 
								"peopletested":"5,926,939" ,
								"positivity":"2.10%" ,	
								"hospitalizations":"1,056" 									
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



