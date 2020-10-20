$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "289,366", 
								"death": "6,877" ,
								"dailycount": "923",
								"dailydeath": "1" ,
								"date":"10/19" ,
								"info":"through 8:00pm 10/18/2020" ,
								
								"testingaverage":"12,841" , 
								"peopletested":"2,893,696" , 
								"positivity":"3.3%" , 
								"hospitalizations":"722"	
								
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



