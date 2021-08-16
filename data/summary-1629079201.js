$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,350,370" ,

								"death": "24,900" ,

								"dailycount": "3,356" ,

								"dailydeath": "8" ,
								"date":"08/15" ,
								"info":"through 6:00pm 08/14/2021" ,							
								

								"testingaverage":"81,867" ,

								"peopletested":"7,716,708" ,

								"positivity":"4.73%" ,
								"hospitalizations":"1,650"

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



