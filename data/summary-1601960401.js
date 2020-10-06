$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "274,942",
				            "death": "6,654" ,
				            "dailycount": "472",
				            "dailydeath": "7" ,
				            "date":"10/05" ,
				            "info":"through 8:00pm 10/04/2020" ,
				            
							"testingaverage":"12,286" ,
							"peopletested":"2,726,583" ,
							"positivity":"3.1%" ,
							"hospitalizations":"674" 							
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



