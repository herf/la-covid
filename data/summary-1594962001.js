$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "147,468",
				            "death": "3,988" ,
				            "dailycount": "4,592",
				            "dailydeath": "59" ,
				            "date":"07/16" ,
				            "info":"through 8:00pm 07/15/2020" ,
				            
							"testingaverage":"16,292" ,
							"peopletested":"1,440,330" ,
							"positivity":"9%" ,
							"hospitalizations":"2,173" ,                    
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



