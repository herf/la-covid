$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "208,528",
				            "death": "4,911" ,
				            "dailycount": "1,789",
				            "dailydeath": "10" ,
				            "date":"08/09" ,
				            "info":"through 8:00pm 08/08/2020" ,
				            
							"testingaverage":"19,380" ,
							"peopletested":"1,932,963" ,
							"positivity":"7.2%" ,
							"hospitalizations":"1,568" ,                    
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



