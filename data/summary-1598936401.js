$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "241,768",
				            "death": "5,784" ,
				            "dailycount": "1,022",
				            "dailydeath": "16" ,
				            "date":"08/31" ,
				            "info":"through 8:00pm 08/30/2020" ,
				            
							"testingaverage":"13,274" ,
							"peopletested":"2,296,883" ,
							"positivity":"4.9%" ,
							"hospitalizations":"1,043" ,                    
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



