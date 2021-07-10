$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,256,515",


								"death": "24,538",


								"dailycount": "1,094",
								"dailydeath": "8",
								"date":"07/10" ,
								"info":"through 6:00pm 07/09/2021" ,

								
								

								"testingaverage":"35,409",

								"peopletested":"7,103,183",

								"positivity":"1.62%",
								"hospitalizations":"336" 

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



