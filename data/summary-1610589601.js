$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "958,497", 
								"death": "12,955" ,
								"dailycount": "14,564", 
								"dailydeath": "281" ,
								"date":"01/13" ,
								"info":"through 6:00pm 01/12/2021" ,
								
								//update M-F only with same info as above,
								"datem":"01/13" ,
								"infom":"through 6:00pm 01/12/2021" ,
								
								"testingaverage":"82,176" , 
								"peopletested":"5,077,380" ,
								"positivity":"18.80%" ,		
								"hospitalizations":"7,949"		
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



