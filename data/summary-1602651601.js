$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "283,750", 
								"death": "6,790" ,
								"dailycount": "790",
								"dailydeath": "18" ,
								"date":"10/13" ,
								"info":"through 8:00pm 10/12/2020" ,
								
								"testingaverage":"12,701" , 
								"peopletested":"2,838,368" , 
								"positivity":"3.1%" , 
								"hospitalizations":"692"	
								
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



