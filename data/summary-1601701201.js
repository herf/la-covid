$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "272,653",
				            "death": "6,626" ,
				            "dailycount": "1,324",
				            "dailydeath": "21" ,
				            "date":"10/02" ,
				            "info":"through 8:00pm 10/01/2020" ,
				            
							"testingaverage":"12,632" ,
							"peopletested":"2,692,681" ,
							"positivity":"3%" ,
							"hospitalizations":"730" 							
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



