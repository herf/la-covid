$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "290,009", 
								"death": "6,912" ,
								"dailycount": "713",
								"dailydeath": "39" ,
								"date":"10/20" ,
								"info":"through 8:00pm 10/19/2020" ,
								
								"testingaverage":"12,934" , 
								"peopletested":"2,913,445" , 
								"positivity":"3.4%" , 
								"hospitalizations":"730"	
								
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



