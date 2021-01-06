$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "840,611", 
								"death": "11,071" ,
								"dailycount": "13,512", 
								"dailydeath": "224" ,
								"date":"01/05" ,
								"info":"through 8:00pm 01/04/2021" ,
								
								"testingaverage":"74,356" , 
								"peopletested":"4,825,956" ,
								"positivity":"20.50%" ,		
								"hospitalizations":"7,898"		
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



