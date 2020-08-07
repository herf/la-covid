$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "201,106",
				            "death": "4,869" ,
				            "dailycount": "3,290",
				            "dailydeath": "48" ,
				            "date":"08/06" ,
				            "info":"through 8:00pm 08/05/2020" ,
				            
							"testingaverage":"18,116" ,
							"peopletested":"1,859,902" ,
							"positivity":"7.8%" ,
							"hospitalizations":"1,741" ,                    
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



