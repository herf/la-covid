$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,253,536",


								"death": "24,514",


								"dailycount": "515",
								"dailydeath": "8",
								"date":"07/07" ,
								"info":"through 6:00pm 07/06/2021" ,

								
								

								"testingaverage":"36,379",

								"peopletested":"7,075,747",

								"positivity":"1.23%",
								"hospitalizations":"275" 

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



