$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "223,131",
				            "death": "5,273" ,
				            "dailycount": "1,185",
				            "dailydeath": "19" ,
				            "date":"08/17" ,
				            "info":"through 8:00pm 08/16/2020" ,
				            
							"testingaverage":"17,443" ,
							"peopletested":"2,093,200" ,
							"positivity":"6.1%" ,
							"hospitalizations":"1,341" ,                    
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



