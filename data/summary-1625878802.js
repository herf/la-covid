$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,255,434",


								"death": "24,530",


								"dailycount": "1,107",
								"dailydeath": "5",
								"date":"07/09" ,
								"info":"through 6:00pm 07/08/2021" ,

								
								

								"testingaverage":"34,996",

								"peopletested":"7,094,177",

								"positivity":"1.54%",
								"hospitalizations":"320" 

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



