$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,171,664", 

								"death": "19,368", 

								"dailycount": "2,394", 

								"dailydeath": "162", 

								"date":"02/17" ,
								"info":"through 6:00pm 02/16/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/17" ,
								"infom":"through 6:00pm 02/16/2021" ,
								
								"testingaverage":"62,080" ,
								"peopletested":"5,714,530" ,
								"positivity":"6%" ,	
								"hospitalizations":"2,855" 
									
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



