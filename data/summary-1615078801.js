$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,201,866", 



								"death": "22,008", 



								"dailycount": "1,823", 


								"dailydeath": "98", 

								"date":"03/06" ,
								"info":"through 6:00pm 03/05/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/05" ,
								"infom":"through 6:00pm 03/04/2021" ,
								
								"testingaverage":"49,070" , 
								"peopletested":"5,884,519" ,
								"positivity":"2.60%" ,	
								"hospitalizations":"1,264" 									
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



