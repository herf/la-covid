$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "302,077", 
								"death": "7,027" ,
								"dailycount": "1,586",
								"dailydeath": "29" ,
								"date":"10/27" ,
								"info":"through 8:00pm 10/26/2020" ,
								
								"testingaverage":"14,875" , 
								"peopletested":"3,046,387" , 
								"positivity":"3.5%" , 
								"hospitalizations":"747"	
								
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



