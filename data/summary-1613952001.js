$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,180,485", 

								"death": "19,885", 

								"dailycount": "1465", 

								"dailydeath": "93", 

								"date":"02/21" ,
								"info":"through 6:00pm 02/20/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/19" ,
								"infom":"through 6:00pm 02/18/2021" ,
								
								"testingaverage":"55,962" ,
								"peopletested":"5,759,878" ,
								"positivity":"5.10%" ,	
								"hospitalizations":"2,369" 
									
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



