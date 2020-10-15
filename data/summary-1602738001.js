$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "285,016", 
								"death": "6,812" ,
								"dailycount": "1,349",
								"dailydeath": "22" ,
								"date":"10/14" ,
								"info":"through 8:00pm 10/13/2020" ,
								
								"testingaverage":"13,362" , 
								"peopletested":"2,850,644" , 
								"positivity":"3.1%" , 
								"hospitalizations":"720"	
								
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



