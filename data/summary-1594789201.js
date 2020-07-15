$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "140,307",
				            "death": "3,894" ,
				            "dailycount": "4,244",
				            "dailydeath": "73" ,
				            "date":"07/14" ,
				            "info":"through 8:00pm 07/13/2020" ,
				            
							"testingaverage":"15,092" ,
							"peopletested":"1,387,946" ,
							"positivity":"9.8%" ,
							"hospitalizations":"2,103" ,                    
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



