$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,194,242", 


								"death": "21,554", 


								"dailycount": "1,407", 


								"dailydeath": "91", 

								"date":"03/02" ,
								"info":"through 6:00pm 03/01/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/02" ,
								"infom":"through 6:00pm 03/01/2021" ,
								
								"testingaverage":"51,611" , 
								"peopletested":"5,844,443" , 
								"positivity":"3.10%" ,	
								"hospitalizations":"1,502" 
									
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



