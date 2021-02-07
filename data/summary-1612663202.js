$( document ).ready(function() {
    var data = {
				    "content": { 
								

								"count": "1,143,422", 

								"death": "17,955", 

								"dailycount": "4,860", 

								"dailydeath": "193", 

								"date":"02/06" ,
								"info":"through 6:00pm 02/05/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/05" ,
								"infom":"through 6:00pm 02/04/2021" ,
								
								"testingaverage":"70,052" ,
								"peopletested":"5,589,228" ,
								"positivity":"9.80%" ,	
								"hospitalizations":"4,607"									
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



