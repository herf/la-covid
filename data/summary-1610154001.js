$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "889,405", 
								"death": "11,863" ,
								"dailycount": "18,313", 
								"dailydeath": "318" ,
								"date":"01/08" ,
								"info":"through 8:00pm 01/07/2021" ,
								
								"testingaverage":"77,147" , 
								"peopletested":"4,923,397" ,
								"positivity":"21.10%" ,		
								"hospitalizations":"8,074"		
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
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



