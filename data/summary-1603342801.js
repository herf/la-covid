$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "290,486", 
								"death": "6,944" ,
								"dailycount": "510",
								"dailydeath": "33" ,
								"date":"10/21" ,
								"info":"through 8:00pm 10/20/2020" ,
								
								"testingaverage":"12,609" , 
								"peopletested":"2,914,790" , 
								"positivity":"3.5%" , 
								"hospitalizations":"758"	
								
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



