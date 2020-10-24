$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "296,821", 
								"death": "6,974" ,
								"dailycount": "2,773",
								"dailydeath": "23" ,
								"date":"10/23" ,
								"info":"through 8:00pm 10/22/2020" ,
								
								"testingaverage":"14,289" , 
								"peopletested":"2,991,827" , 
								"positivity":"3.4%" , 
								"hospitalizations":"769"	
								
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



