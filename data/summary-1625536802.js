$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,252,739",


								"death": "24,504",


								"dailycount": "436",
								"dailydeath": "2",
								"date":"07/05" ,
								"info":"through 6:00pm 07/04/2021" ,

								
								

								"testingaverage":"35,938",

								"peopletested":"7,065,692",

								"positivity":"1.60%",
								"hospitalizations":"284" 

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



