$( document ).ready(function() {
    var data = {
				    "content": {            
				                "count": "281,165",
								"death": "6,768" ,
								"dailycount": "1285",
								"dailydeath": "28" ,
								 "date":"10/10" ,
								"info":"through 8:00pm 10/09/2020" ,
								 "testingaverage":"11,817" , 
								"peopletested":"2,801,158" ,
								"positivity":"3.20%" ,
								"hospitalizations":"701" 	
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



